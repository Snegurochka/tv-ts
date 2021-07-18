import { useCallback, useEffect, useState } from "react";
import API from "../API";
import { MovieState } from "../types";

export const useMovieFetch = (movieId:string) => {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            //Get directors only
            const directors = credits.crew.filter(
                (member:any) => member.job === 'Director'
            );

            setState({
                ...movie,
                actors: credits.cast,
                directors
            });

            setLoading(false);
        } catch (e) {
            setError(true);
        }
    }, [movieId]);

    useEffect(() => {
        fetchData();
    }, [movieId, fetchData]);

    return { state, loading, error };
}