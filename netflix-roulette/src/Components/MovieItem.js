import {movieItem} from './constants.json';
import '../css/MovieItem.css';

const MovieItem = (props) => {
    return <li className={movieItem.className}>
        <img className={movieItem.poster.className} src={props.movie.poster_path}/>
        <div className={movieItem.title.className}>{props.movie.title}</div>
        <time className={movieItem.releaseYear.className}>{new Date(props.movie.release_date).getFullYear()}</time>
        <div className={movieItem.genres.className}>{props.movie.genres.join(', ')}</div>
    </li>;
};

export default MovieItem;