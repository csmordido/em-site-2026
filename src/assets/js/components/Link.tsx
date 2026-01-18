import AsteriskSVG from "./AsteriskSVG";
import CircleSVG from "./CircleSVG";
interface LinkProps {
	href: string;
	text: string;
	ariaLabel: string;
}

const Link = ({ href, text, ariaLabel }: LinkProps) => {
	return (
		<a className="link" href={href} aria-label={ariaLabel}>
			{text}
			<div className="link__indicator">
				<AsteriskSVG />
				<CircleSVG />
			</div>
		</a>
	);
};

export default Link;
