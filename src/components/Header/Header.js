import './Header.css';
import logo from '../../images/header.svg';

const Header = () => {
  return (
    <header>
      <a href='*' className='header__homelink'>
        <img className='header__logo' src={logo} alt='логотип'></img>
      </a>
      <nav className='header__navblock'>
        <a href='*' className='header__link'>
          Our work
        </a>
        <a href='*' className='header__link'>
          What we do
        </a>
        <a href='*' className='header__link'>
          About us
        </a>
        <a href='*' className='header__link'>
          Get in touch
        </a>
      </nav>
    </header>
  );
};
export default Header;
