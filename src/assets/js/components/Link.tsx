import AsteriskSVG from "./AsteriskSVG";
import CircleSVG from "./CircleSVG";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { MouseEvent } from "react";
interface LinkProps {
	href: string;
	text: string;
	ariaLabel: string;
}

const Link = ({ href, text, ariaLabel }: LinkProps) => {
	const { contextSafe } = useGSAP();

	const handleClick = contextSafe((event: MouseEvent, id: string) => {
		event.preventDefault();
		console.log("Clicked link to:", id);
		gsap.to(window, { scrollTo: id });
	});

	return (
		<a className="link" href={href} aria-label={ariaLabel} onClick={(event) => handleClick(event, href)}>
			{text}
			<div className="link__indicator">
				<AsteriskSVG />
				<CircleSVG />
			</div>
		</a>
	);
};

export default Link;
