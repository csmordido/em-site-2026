import AsteriskSVG from "./AsteriskSVG";
import CircleSVG from "./CircleSVG";
interface LinkProps {
	href: string;
	text: string;
}

const Link = ({ href, text }: LinkProps) => {
	return (
		<a className="link" href={href}>
			{text}
			<div className="link__indicator">
				<AsteriskSVG />
				<CircleSVG />
			</div>
		</a>
	);
};

export default Link;
