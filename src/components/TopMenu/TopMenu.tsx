import { FC } from "react";
import { useLocation } from 'react-router-dom';

import { Item, Wrapper } from "./TopMenu.styles";
import homeIcon from '../../img/home-icon.svg';
import movieIcon from '../../img/movie-icon.svg';
import tvIcon from '../../img/tv-icon.svg';
import watchlistIcon from '../../img/watchlist-icon.svg';
import { AppRoute } from "../../const";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const menu = [
    {
        title: 'Home',
        path: AppRoute.HOME,
        icon: homeIcon,
        isProtectd: false,
    },
    {
        title: 'Movies',
        path: AppRoute.MOVIES,
        icon: movieIcon,
        isProtectd: false,
    },
    {
        title: 'TV Series',
        path: AppRoute.TV,
        icon: tvIcon,
        isProtectd: false,
    },
    {
        title: 'WatchList',
        path: AppRoute.WATCH_LIST,
        icon: watchlistIcon,
        isProtectd: true,
    },
]

const TopMenu: FC = () => {
    const { pathname } = useLocation();
    const user = useSelector(selectCurrentUser);

    return (
        <Wrapper>
            {menu.map((item, ind) => (
                (!item.isProtectd || (item.isProtectd && user)) ? (
                    <Item key={ind} to={item.path} className={
                        item.path === pathname
                            ? 'active'
                            : ''}>
                        <img src={item.icon} width="20" alt={item.title} />
                        <span>{item.title}</span>
                    </Item>
                ) : ('')
            ))}
        </Wrapper>
    )
}

export default TopMenu;