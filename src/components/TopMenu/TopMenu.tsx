import React from "react";
import { useLocation } from 'react-router-dom';

import { Item, Wrapper } from "./TopMenu.styles";
import homeIcon from '../../img/home-icon.svg';
import movieIcon from '../../img/movie-icon.svg';
import tvIcon from '../../img/tv-icon.svg';
import watchlistIcon from '../../img/watchlist-icon.svg';
import { AppRoute } from "../../const";

type PropsType = {}

const menu = [
    {
        title: 'Home',
        path: AppRoute.HOME,
        icon: homeIcon,
    },
    {
        title: 'Movies',
        path: AppRoute.MOVIES,
        icon: movieIcon,
    },
    {
        title: 'TV Series',
        path: AppRoute.TV,
        icon: tvIcon,
    },
    {
        title: 'WatchList',
        path: AppRoute.WATCH_LIST,
        icon: watchlistIcon,
    },
]

const TopMenu: React.FC<PropsType> = () => {
    const { pathname } = useLocation();

    return (
        <Wrapper>
            {menu.map((item, ind) => (
                <Item key={ind} to={item.path} className={
                    item.path === pathname
                        ? 'active'
                        : ''}>
                    <img src={item.icon} width="20" alt={item.title} />
                    <span>{item.title}</span>
                </Item>
            ))}
        </Wrapper>
    )
}

export default TopMenu;