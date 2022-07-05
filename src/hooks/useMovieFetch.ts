/*
*   Deprecated since 1.14
*/
import { useCallback, useEffect, useState } from "react";
import API from "../API";
import { isPersistedState } from "../utils/helpers";
import { MovieState } from "../interfaces/types";

export const useMovieFetch = (movieId: string) => {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            const photos = await API.fetchPhotos(movieId);

            //Get directors only
            const directors = credits.crew.filter(
                (member) => member.job === 'Director'
            );

            setState({
                ...movie,
                backdrops: photos.backdrops,
                actors: credits.cast,
                directors
            });

            setLoading(false);
        } catch (e) {
            setError(true);
        }
    }, [movieId]);

    useEffect(() => {
        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchData();
    }, [movieId, fetchData]);

    // Write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return { state, loading, error };
}