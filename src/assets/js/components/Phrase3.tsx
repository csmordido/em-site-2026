import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const Phrase3 = () => {
	const container = useRef<HTMLDivElement>(null);

	// useGSAP(
	// 	() => {
	// 		if (!container.current) return;
	// 	},
	// 	{ scope: container },
	// );

	return (
		<div className="phrase-3" ref={container}>
			<p>Sometimes I write</p>
		</div>
	);
};

export default Phrase3;
