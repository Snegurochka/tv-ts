import { FC } from "react";
import { useDispatch } from "react-redux";

import { FavoriteBtnWrapper } from "./FavoriteBtn.styles";

import { ReactComponent as FavoriteIcon } from './../../img/favorite-icon.svg';
import { ReactComponent as FavoriteBorderIcon } from './../../img/favorite-border-icon.svg';

interface IProps {
    movieId: number;
    userId: string;
    isFavorite: boolean;
    btnClass?: string;
}

const FavoriteBtn: FC<IProps> = (props) => {
    const dispatch = useDispatch();

    const setFavoriteHandler = () => {

    }

    return (
        <FavoriteBtnWrapper onClick={setFavoriteHandler}>
            {!props.isFavorite
                ? <FavoriteBorderIcon />
                : <FavoriteIcon />
            }
        </FavoriteBtnWrapper>
    )
}

export default FavoriteBtn
