import Logo from "./Logo";
import '../css/Header.css';
import Background from "./Background";
import Button from "./Button";
import {header} from './constants.json'
import Search from "./Search";

const Header = () => {
    return <header className='main-header'>
        <Background />
        <section className={header.foreground.className}>
            <Logo className={header.logo.className} />
            <Button className={header.addMovie.className} text={header.addMovie.text}/>
            <Search />
        </section>
    </header>;
}

export default Header; 