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
			<div className="link__indicator">
				<img className="asterisk" src={asterisk} alt="" />
				<img className="circle" src={circle} alt="" />
			</div>
		</a>
	);
};

export default Link;
