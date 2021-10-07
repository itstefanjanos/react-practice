import '../css/Search.css';
import Button from "./Button";
import {search} from './constants.json'

const Search = () => {
  return <form className={search.form.className}>
      <label htmlFor={search.field.id} className={search.label.className}>{search.label.text}</label>
      <input type='text' id={search.field.id} className={search.field.className} placeholder={search.field.placeholder}/>
      <Button className={search.button.className} text={search.button.text}/>
  </form>
}

export default Search;