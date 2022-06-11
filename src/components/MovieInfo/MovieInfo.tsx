import React from 'react';
import { MovieState } from '../../types';
import { Content, Wrapper, Text, Director, Score, RatingWrapper } from './MovieInfo.styles';
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

                    <RatingWrapper>
                        <div>
                            <h3>Rating</h3>
                            <Score>{movie.vote_average}</Score>
                        </div>
                        {movie.directors ? (
                            <Director>
                                <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                                {movie.directors.map(director => (
                                    <p key={director.credit_id}>{director.name}</p>
                                ))}
                            </Director>) : null}
                    </RatingWrapper>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo;