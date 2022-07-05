import React from "react";

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



const Home: React.FC = () => {
    const {
        movies,
        page,
        totalPages,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useCatalogListFetch('movie');

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
                    <Button text='Load More' callback={() => setIsLoadingMore(true)} />
                )}
            </>
        </Layout>
    )
}

export default Home;