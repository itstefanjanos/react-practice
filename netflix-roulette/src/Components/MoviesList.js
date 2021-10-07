import MovieItem from "./MovieItem";
import '../css/MoviesList.css';
import {moviesList} from './constants.json'

const MoviesList = (props) => {
    return <ul className={moviesList.className}>
        {props.movies.map((movie) => <MovieItem movie={movie}/>)}
    </ul>;
};

export default MoviesList;