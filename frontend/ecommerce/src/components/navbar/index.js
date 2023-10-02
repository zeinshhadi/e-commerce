import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Search from '../searchBar/index'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  const handleSearch = (query) => {
    // Implement your search logic here, e.g., fetching data based on the query
    console.log(`Searching for: ${query}`);
  };

  return (
    <header>
      <div className="logo-header">
      <Search onSearch={handleSearch} className="search-component"/>
        <p className="logo">Shop Nexa</p>
        </div>
      <div class="header-container">
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/login">Login</Link>
          <Link to="/sell">Sell</Link>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
