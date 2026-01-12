import Link from "./Link";

const Header = () => {
	return (
		<header className="header full-width">
			<nav className="content-width">
				<ul className="links">
					<li>
						<Link text="Home" href="/" />
					</li>
					<li>
						<Link text="Work" href="/work" />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
