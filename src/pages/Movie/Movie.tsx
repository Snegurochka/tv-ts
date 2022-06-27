import { useMovieFetch } from '../../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCommentsStart } from '../../store/comments/comments.action';

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



const Movie: React.FC = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const dispatch = useDispatch();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    useEffect(() => {
        dispatch(fetchCommentsStart())
    }, [dispatch]);

    if (loading) return <Spinner />;
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