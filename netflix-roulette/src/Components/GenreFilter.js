import {genreFilter} from './constants.json'
import '../css/GenreFilter.css'

const GenreFilter = () => {
    return <ul className={genreFilter.className}>
        {Object.keys(genreFilter.genres).map(genre => (
            <li 
                data-selected={genreFilter.genres[genre].selected} 
                className={genreFilter.item.className}>
                    {genre}
            </li>))}
    </ul>;
};

export default GenreFilter;