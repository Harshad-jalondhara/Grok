import "../styles/navbar.css";
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <span className="logo">xAI</span>

        <nav className="navbar-center">
          <a href="#">GROK</a>
          <a href="#">API</a>
          <a href="#">COMPANY</a>
          <a href="#">COLOSSUS</a>
          <a href="#">CAREERS</a>
          <a href="#">NEWS</a>
        </nav>

        <button className="try-btn">TRY GROK</button>
      </div>
    </header>
  );
};

export default Navbar;
