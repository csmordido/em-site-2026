import Link from "./Link";

const Header = () => {
	return (
		<header className="header full-width">
			<nav className="content-width">
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
