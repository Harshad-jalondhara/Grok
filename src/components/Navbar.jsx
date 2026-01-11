import { Link } from "react-router-dom"
import "../styles/navbar.css";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* logo */}
          <div className="logo"> 
            <img src="src/assets/images/logo.png" alt="" />
          </div>
          {/* page */}
          <div className="navbar-center">
            <Link to="/">GROK</Link>
            <Link to="/about">API</Link>
            <Link to="/about">COMPANY</Link>
            <Link to="/about">COLOSSUS</Link>
            <Link to="/about">CAREERS</Link>
            <Link to="/about">NEWS</Link>
          </div>
          {/* button */}
          <div className="navbar-right">
              <button>TRY GROK</button>
          </div>


        </div>
      </div>
    </header>
  );
}

export default Navbar;
