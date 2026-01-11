import { Link } from "react-router-dom"
import "../styles/navbar.css";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="logo">
            <img src="src/assets/images/logo.png" alt="Grok" />
          </div>
          <nav className="navbar-center">
            <Link to="/">Grok</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="navbar-right">
            Try Grok
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
