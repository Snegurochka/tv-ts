import React from "react";
import { useParams } from "react-router";
import { useCatalogListFetch } from "../../hooks/useCatalogListFetch";

import NoImage from '../../img/no_image.jpg';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Components
import Grid from "../../components/Grid/Grid";
import Thumb from "../../components/Thumb/Thumb";
import Error from "../../components/Error/Error";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Spinner } from "../../components/Spinner/Spinner.styles";
import Button from "../../components/UI/Button/Button";
import Layout from "../../components/Layout/Layout";


const Catalog: React.FC = () => {
    const { category } = useParams<{ category: string }>();

    const { state, loading, error, setSearchTerm, setIsLoadingMore } = useCatalogListFetch(category);

    if (error) {
        return <Error />
    }

    return (
        <Layout>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={category === 'movie' ? 'Movies' : 'TV Series'}>
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
        </Layout>
    )
}

export default Catalog;