import work from "../model/work";
import Link from "./Link";

const Work = () => {
	return (
		<section id="work" className="work full-width">
			<ul className="work__list content-wrapper">
				{work.map((item) => {
					return (
						<li className="work__item" key={item.title}>
							<Link href={item.link} text={item.title} ariaLabel={item.title} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Work;
