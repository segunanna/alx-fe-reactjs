import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '1rem',
    background: '#282c34',
    color: 'white',
    justifyContent: 'center'
  };

  return (
    <nav style={navStyle}>
      <Link style={{ color: 'white' }} to="/">Home</Link>
      <Link style={{ color: 'white' }} to="/about">About</Link>
      <Link style={{ color: 'white' }} to="/services">Services</Link>
      <Link style={{ color: 'white' }} to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;