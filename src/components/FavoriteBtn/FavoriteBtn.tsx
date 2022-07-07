import { FC } from "react";
import { useDispatch } from "react-redux";

import { FavoriteBtnWrapper } from "./FavoriteBtn.styles";

import { ReactComponent as FavoriteIcon } from './../../img/favorite-icon.svg';
import { ReactComponent as FavoriteBorderIcon } from './../../img/favorite-border-icon.svg';

interface IProps {
    isFavorite: boolean;
    btnClass?: string;
    setFavoriteHandler: () => void
}

const FavoriteBtn: FC<IProps> = ({isFavorite, setFavoriteHandler}) => {
    return (
        <FavoriteBtnWrapper onClick={setFavoriteHandler}>
            {!isFavorite
                ? <FavoriteBorderIcon />
                : <FavoriteIcon />
            }
        </FavoriteBtnWrapper>
    )
}

export default FavoriteBtn
