import asterisk from "../../images/asterisk.svg";
import circle from "../../images/circle.svg";

interface LinkProps {
	href: string;
	text: string;
}

const Link = ({ href, text }: LinkProps) => {
	return (
		<a className="link" href={href}>
			{text}
			<span className="link__indicator">
				<img src={asterisk} alt="" />
				<img src={circle} alt="" />
			</span>
		</a>
	);
};

export default Link;
