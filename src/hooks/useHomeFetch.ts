import { useEffect, useState } from "react";
// APT
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";
//Types
import { MoviesStateType } from "../types";

const initialState: MoviesStateType = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page = 1, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState((prev) => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }

    // initial and search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // loading more
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);

        setIsLoadingMore(false);
    }, [isLoadingMore, state.page, searchTerm]);

    //Set SessionStorage
    useEffect(()=>{
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    }, [searchTerm, state])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}