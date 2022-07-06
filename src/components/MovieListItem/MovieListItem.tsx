import { FC } from 'react';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import NoImage from '../../img/no_image.jpg';

import { MovieType } from '../../interfaces/types';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import Thumb from '../Thumb/Thumb';
import { Wrapper } from './MovieListItem.styles';

type PropsType = {
    movie: MovieType,
    userId: string | null
}

const MovieListItem: FC<PropsType> = ({ movie, userId }) => {
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
            {userId ? <FavoriteBtn movieId={movie.id} isFavorite={false} userId={userId} /> : null}

        </Wrapper>
    )
}

export default MovieListItem