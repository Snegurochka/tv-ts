import { FC } from 'react';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import NoImage from '../../img/no_image.jpg';

import { MovieType } from '../../interfaces/types';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import Thumb from '../Thumb/Thumb';
import { Wrapper } from './MovieListItem.styles';

type PropsType = {
    movie: MovieType
}

const MovieListItem: FC<PropsType> = ({ movie }) => {
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
            <FavoriteBtn id={movie.id} isFavorite={false} />
        </Wrapper>
    )
}

export default MovieListItem