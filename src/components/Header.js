import logo from '../assests/logo.png';
import Nav from '../components/Nav';

function Header() {
  return (
    <header className='container'>
      <img src={logo} alt='logo' />
      <Nav />
    </header>
  );
}

export default Header;
