import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Phrase2 = () => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;
		},
		{ scope: container },
	);

	return (
		<div className="phrase-2" ref={container}>
			<p>While ensuring content is easily accessible</p>
		</div>
	);
};

export default Phrase2;
