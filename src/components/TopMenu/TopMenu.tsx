import React from "react";
import { Link } from 'react-router-dom';

import { Wrapper } from "./TopMenu.styles";
import homeIcon from '../../img/home-icon.svg';
import watchlistIcon from '../../img/watchlist-icon.svg';


type PropsType = {}

const TopMenu: React.FC<PropsType> = () => {
    return (
        <Wrapper>
            <Link to="/">
                <img src={homeIcon} width="20" alt="Home"/>
                <span>Home</span>
            </Link>
            <Link to="/watchlist">
                <img src={watchlistIcon} width="20" alt="WatchList"/>
                <span>WatchList</span>
            </Link>
        </Wrapper>
    )
}

export default TopMenu;