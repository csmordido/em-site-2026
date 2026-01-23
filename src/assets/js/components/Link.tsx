import AsteriskSVG from "./AsteriskSVG";
import CircleSVG from "./CircleSVG";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { MouseEvent } from "react";
interface LinkProps {
	href: string;
	text: string;
	ariaLabel: string;
	type?: string;
}

const Link = ({ href, text, ariaLabel, type }: LinkProps) => {
	const { contextSafe } = useGSAP();

	const handleClick = contextSafe((event: MouseEvent, id: string, type?: string) => {
		if (type !== "external") {
			event.preventDefault();
			gsap.to(window, { scrollTo: id });
		}
	});

	return (
		<a className="link" href={href} aria-label={ariaLabel} onClick={(event) => handleClick(event, href, type)}>
			{text}
			<div className="link__indicator">
				<AsteriskSVG />
				<CircleSVG />
			</div>
		</a>
	);
};

export default Link;
