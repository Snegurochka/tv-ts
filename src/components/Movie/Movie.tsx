import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../../hooks/useMovieFetch';


// Components
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Gallery from '../Gallery/Gallery';
import ActorsList from '../ActorsList/ActorsList';

// Hook

const Movie: React.FC = () => {
    const { movieId } = useParams<{movieId: string}>();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <Error />
   

    return (
        <>
        <BreadCrumb movieTitle={movie.original_title} />

        <MovieInfo movie={movie} />

        <MovieInfoBar time={movie.runtime} buget={movie.budget} revenue={movie.revenue}/>

        {movie.backdrops ? (<Gallery header='Photos' photos={movie.backdrops}/>) : null}

        {movie.actors ? (<ActorsList actors={movie.actors} />) : null}
        </>
    )
}

export default Movie;