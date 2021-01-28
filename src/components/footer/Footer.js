import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentLocation = useLocation();

  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {currentLocation.pathname === '/' && <Link to='/about'>About</Link>}
    </footer>
  );
};

export default Footer;
