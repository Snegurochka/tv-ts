import React from "react";
import { Link } from 'react-router-dom';

import { Wrapper } from "./TopMenu.styles";
import homeIcon from '../../img/home-icon.svg';
import watchlistIcon from '../../img/watchlist-icon.svg';
import { AppRoute } from "../../const";

type PropsType = {}

const TopMenu: React.FC<PropsType> = () => {
    return (
        <Wrapper>
            <Link to={AppRoute.HOME}>
                <img src={homeIcon} width="20" alt="Home"/>
                <span>Home</span>
            </Link>
            <Link to={AppRoute.WATCH_LIST}>
                <img src={watchlistIcon} width="20" alt="WatchList"/>
                <span>WatchList</span>
            </Link>
        </Wrapper>
    )
}

export default TopMenu;