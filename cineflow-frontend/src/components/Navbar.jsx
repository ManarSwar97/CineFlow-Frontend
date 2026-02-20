import { Link } from "react-router-dom";
import logo from "../assets/images/cineflow.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-glass">

      <div className="nav-left">
        <img src={logo} alt="CineFlow logo" />
      </div>

      <nav className="nav-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="nav-right">
        <Link to="/logout" className="logout-btn">Logout</Link>
      </div>

    </header>
  );
};

export default Navbar;
