import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div class="header-container">

			<div><h3>LOGO</h3></div>

			<nav ref={navRef}>
			
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
					</div>
		</header>
	);
}

export default Navbar;