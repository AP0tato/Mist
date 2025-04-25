import { Outlet, Link } from 'react-router-dom';
import './pages/css/Navigator.css';

const Navigator = () => {
  return (
    <>
      <nav>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigator;