import '../css/Logo.css';
import {logo} from './constants.json';

const Logo = (props) => {
  return <figure className={`${logo.className} ${props.className !== undefined?props.className:''}`}>
    <strong>netflix</strong>roulette
  </figure>;
}

export default Logo; 