import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// APT
import { fetchMoviesStart } from "../store/movies/movies.action";
import {
    selectMovies,
    selectMoviesError,
    selectMoviesIsLoading,
    selectMoviesPage,
    selectMoviesTotalPages
} from "../store/movies/movies.selector";
// Helpers
//import { isPersistedState } from "../utils/helpers";


export const useCatalogListFetch = (type: string) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const page = useSelector(selectMoviesPage);
    const totalPages = useSelector(selectMoviesTotalPages);
    const isLoading = useSelector(selectMoviesIsLoading);
    const error = useSelector(selectMoviesError);

    // initial and search
    useEffect(() => {
        if (!searchTerm) {
            dispatch(fetchMoviesStart(type));
            // const stateType = `${type}State`;
            // const sessionState = isPersistedState(stateType);

            // if (sessionState) {
            //     setState(sessionState);
            //     return;
            // }
        }
        dispatch(fetchMoviesStart(type, 1, searchTerm));
    }, [searchTerm, type]); // eslint-disable-line react-hooks/exhaustive-deps

    // loading more
    useEffect(() => {
        if (!isLoadingMore) return;

        dispatch(fetchMoviesStart(type, page + 1, searchTerm));

        setIsLoadingMore(false);
    }, [isLoadingMore, page, searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

    //Set SessionStorage
    // useEffect(()=>{
    //     if (!searchTerm) {
    //         const stateType = `${type}State`;
    //         sessionStorage.setItem(stateType, JSON.stringify(state));
    //     }
    // }, [searchTerm, state, type])

    return { movies, page, totalPages, isLoading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}