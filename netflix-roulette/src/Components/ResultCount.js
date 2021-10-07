import {searchResult} from './constants.json';
import '../css/ResultCount.css';

const ResultCount = (props) => {
    return <span className={searchResult.count.className}>
        <span className={searchResult.count.value.className}>{props.count}</span> {searchResult.count.text}</span>;
};

export default ResultCount;