import React from 'react';
import { MovieState } from '../../types';
import { Content, Wrapper, Text } from './MovieInfo.styles';
import NoImage from '../../img/no_image.jpg';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';

// Components
import Thumb from '../Thumb/Thumb';


type PropsType = {
    movie: MovieState
}

const MovieInfo: React.FC<PropsType> = ({ movie }) => {
    return (
        <Wrapper backdrop={movie.backdrop_path} >
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Plot</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>Rating</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        {movie.directors ? (
                            <div className="director">
                                <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                                {movie.directors.map(director => (
                                    <p key={director.credit_id}>{director.name}</p>
                                ))}
                            </div>) : null}

                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo;