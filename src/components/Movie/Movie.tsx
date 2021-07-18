import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import NoImage from '../../img/no_image.jpg';

// Components
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Grid from '../Grid/Grid';
import Actor from '../Actor/Actor';

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

        <Grid header='Actors'>
            {movie.actors.map(actor => (
                <Actor
                key={actor.credit_id}
                name={actor.name}
                character={actor.character} 
                imageUrl={actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage}/>
            ))}
        </Grid>
        </>
    )
}

export default Movie;