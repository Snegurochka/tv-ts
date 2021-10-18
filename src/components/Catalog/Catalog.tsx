import React from "react";
import { useParams } from "react-router";

// Components
import Grid from "../Grid/Grid";

const Catalog: React.FC = () => {
    const { category } = useParams<{category: string}>();

    return (
        <>
            <Grid header={category === 'movie' ? 'Movies' : 'TV Series'}>
            </Grid>
        </>
    )
}

export default Catalog;