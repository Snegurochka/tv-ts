import React from "react";
import { useParams } from "react-router";
import { useCatalogListFetch } from "../../hooks/useCatalogListFetch";


import NoImage from '../../img/no_image.jpg';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Components
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Error from "../Error/Error";

const Catalog: React.FC = () => {
    const { category } = useParams<{category: string}>();

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useCatalogListFetch(category);

    if (error) {
        return <Error />
    }

    return (
        <>
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
        </>
    )
}

export default Catalog;