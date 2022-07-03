import { useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsStart } from '../../store/comments/comments.action';
import { fetchMovieStart } from '../../store/movie/movie.action';

// Components
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieInfoBar from "../../components/MovieInfoBar/MovieInfoBar";
import Gallery from '../../components/Gallery/Gallery';
import ActorsList from '../../components/ActorsList/ActorsList';
import Comments from '../../components/Comments/Comments';
import Layout from '../../components/Layout/Layout';
import { selectMovie, selectMovieError, selectMovieIsLoading } from '../../store/movie/movie.selector';


const Movie: FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const dispatch = useDispatch();
    //const { loading, error } = useMovieFetch(movieId);
    const movie = useSelector(selectMovie);
    const isLoading = useSelector(selectMovieIsLoading);
    const error = useSelector(selectMovieError);

    useEffect(() => {
        dispatch(fetchMovieStart(movieId));
        dispatch(fetchCommentsStart());
    }, [dispatch, movieId]);

    if (isLoading) return <Spinner />;
    if (error) return <Error />

    return (
        <Layout>
            <>
                <BreadCrumb movieTitle={movie.original_title} />

                <MovieInfo movie={movie} />

                {movie.runtime ? (<MovieInfoBar time={movie.runtime} buget={movie.budget} revenue={movie.revenue} />) : null}

                {movie.backdrops ? (<Gallery header='Photos' photos={movie.backdrops} />) : null}

                {movie.actors ? (<ActorsList actors={movie.actors} />) : null}
                <Comments />
            </>
        </Layout>

    )
}

export default Movie;