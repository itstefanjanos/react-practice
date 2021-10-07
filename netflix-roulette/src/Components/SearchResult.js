import GenreFilter from './GenreFilter';
import MoviesList from './MoviesList';
import SortBySelector from './SortBySelector';
import MockedSearchResult from './MockedSerchResult.json';
import '../css/SearchResult.css';
import {searchResult} from './constants.json'
import ResultCount from './ResultCount';

const SearchResult = (props) => {
    const moviesResults = props.searchResult === undefined?MockedSearchResult:props.searchResult;
    console.dir(moviesResults);
    return <section className={searchResult.container.className}>
        <section className={searchResult.topSection.className}>
            <GenreFilter />
            <SortBySelector />
        </section>
        <ResultCount count={moviesResults.data.length}/>
        <MoviesList movies={moviesResults.data}/>
    </section>;
};

export default SearchResult;