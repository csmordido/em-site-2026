import Link from "./Link";
import logo from "../../images/logo.svg";

const Header = () => {
	return (
		<header className="header full-width">
			<nav className="content-width">
				<img src={logo} alt="Logo" className="header__logo" />
				<ul className="links">
					<li>
						<Link text="About" href="#about" ariaLabel="Go to about section" />
					</li>
					<li>
						<Link text="Work" href="#work" ariaLabel="Go to work section" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
