import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "./Link";
import WaveSVG from "./WaveSVG";

const Phrase3 = () => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;

			ScrollTrigger.create({
				trigger: container.current,
				start: "top center",
				end: "bottom center",
				scrub: true,
				once: true,
				animation: gsap.fromTo(
					".wave__path",
					{
						drawSVG: "0% 0%",
					},
					{ drawSVG: "0% 100%" },
				),
			});
		},
		{ scope: container, dependencies: [] },
	);

	return (
		<div className="phrase-3 parallax" ref={container}>
			<div>
				Sometimes I&nbsp;
				<span className="animated-link">
					<Link
						href="https://dev.to/plank/using-css-size-container-queries-43ef"
						text="write"
						ariaLabel="Go to article"
					/>
					<WaveSVG />
				</span>
			</div>
		</div>
	);
};

export default Phrase3;
