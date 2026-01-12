import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Phrase4 = () => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;
		},
		{ scope: container },
	);

	return (
		<div className="phrase-4" ref={container}>
			<p>most of the time build websites for Plank.</p>
		</div>
	);
};

export default Phrase4;
