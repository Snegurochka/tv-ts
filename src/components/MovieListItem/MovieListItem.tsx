import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import NoImage from '../../img/no_image.jpg';

import { MovieType } from '../../interfaces/types';
import { addFavorite } from '../../store/favorites/favorites.action';
import { selectFavoritesMoviesIds } from '../../store/favorites/favorites.selector';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import Thumb from '../Thumb/Thumb';
import { Wrapper } from './MovieListItem.styles';

type PropsType = {
    movie: MovieType,
    userId: string | null
}

const MovieListItem: FC<PropsType> = ({ movie, userId }) => {
    const favoritesIds = useSelector(selectFavoritesMoviesIds);
    const dispatch = useDispatch();
    const setFavorite = () => {
        if (!userId) return;
        dispatch(addFavorite({
            id: movie.id,
            userId: userId,
            backdrop_path: movie.backdrop_path
        }));
    }

    const isFavorite = favoritesIds?.includes(movie.id) || false;

    return (
        <Wrapper>
            <Thumb
                key={movie.id}
                image={
                    movie.poster_path
                        ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path
                        : NoImage
                }
                moveId={movie.id}
                clickable={true} />
            {userId ? <FavoriteBtn isFavorite={isFavorite} setFavoriteHandler={setFavorite} /> : null}
        </Wrapper>
    )
}

export default MovieListItem