import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFavoritesMovies } from "../../store/favorites/favorites.selector";

import { Wrapper } from "./WatchList.styles";

import Layout from "../../components/Layout/Layout";


const WatchList: FC = () => {
    const favorites = useSelector(selectFavoritesMovies);

    return (
        <Layout header="WatchList" typeContent="page">
            <Wrapper>
                <p>I will watch it later:</p>
                {favorites ? favorites.forEach((movie) => movie) : (<span>There is no movie.</span>)}
            </Wrapper>
        </Layout>
    )
}

export default WatchList