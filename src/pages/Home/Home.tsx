import React, { useEffect, useState } from "react";

import NoImage from '../../img/no_image.jpg';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Hook
import { useCatalogListFetch } from '../../hooks/useCatalogListFetch';

// Components
import BigBanner from '../../components/BigBanner/BigBanner';
import Thumb from '../../components/Thumb/Thumb';
import Grid from '../../components/Grid/Grid';
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Error from "../../components/Error/Error";
import Button from "../../components/UI/Button/Button";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart } from "../../store/movies/movies.action";
import { selectMovies, selectMoviesError, selectMoviesIsLoading, selectMoviesPage, selectMoviesTotalPages } from "../../store/movies/movies.selector";



const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useCatalogListFetch('movie');
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const page = useSelector(selectMoviesPage);
    const totalPages = useSelector(selectMoviesTotalPages);
    const isLoading = useSelector(selectMoviesIsLoading);
    const error = useSelector(selectMoviesError);

    useEffect(() => {
        dispatch(fetchMoviesStart());
    }, [dispatch]);

    const loadingMoreHandler = () => {

    }

    if (error) {
        return <Error />
    }

    return (
        <Layout>
            <>
                {!searchTerm && movies[0]
                    ? <BigBanner
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies[0].backdrop_path}`}
                        title={movies[0].original_title}
                        text={movies[0].overview}
                    />
                    : null
                }
                <SearchBar setSearchTerm={setSearchTerm} />
                <Grid header={searchTerm ? 'Search result' : 'Popular Movies'}>
                    {movies.map((movie) => (
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
                {isLoading && <Spinner />}
                {page < totalPages && !isLoading && (
                    <Button text='Load More' callback={loadingMoreHandler} />
                )}
            </>
        </Layout>
    )
}

export default Home;