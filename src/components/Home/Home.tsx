import React from "react";

import NoImage from '../../img/no_image.jpg';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Components
import BigBanner from '../BigBanner/BigBanner';
import Thumb from '../Thumb/Thumb';
import Grid from '../Grid/Grid';
import Spinner from "../Spinner/Spinner";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Error from "../Error/Error";

// Hook
import { useHomeFetch } from '../../hooks/useHomeFetch';


const Home: React.FC = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if (error) {
        return <Error />
    }

    return (
        <>
            {!searchTerm && state.results[0]
                ? <BigBanner
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search result' : 'Popular Movies'}>
                {state.results.map((movie) => (
                    <Thumb
                        key={movie.id}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path
                                : NoImage
                        }
                        moveId={movie.id}
                        clickable={true} />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    )
}

export default Home;