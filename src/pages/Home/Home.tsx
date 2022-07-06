import { FC } from "react";

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Hook
import { useCatalogListFetch } from '../../hooks/useCatalogListFetch';

// Components
import BigBanner from '../../components/BigBanner/BigBanner';
import Grid from '../../components/Grid/Grid';
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Error from "../../components/Error/Error";
import Button from "../../components/UI/Button/Button";
import Layout from "../../components/Layout/Layout";
import MovieListItem from "../../components/MovieListItem/MovieListItem";


const Home: FC = () => {
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
                    {movies.map((movie) => (<MovieListItem movie={movie} />))}
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