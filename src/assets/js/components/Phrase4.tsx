import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import web from "../../images/web.svg";
import Link from "./Link";

const Phrase4 = () => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;

			const tl = gsap
				.timeline()
				.to(".animated-word", {
					duration: 0.6,
					ease: "power2.out",
					scale: 1,
				})
				.from(".web", {
					scale: 0,
					duration: 0.8,
					ease: "power2.out",
				});

			ScrollTrigger.create({
				trigger: container.current,
				start: "center center+=200",
				animation: tl,
			});
		},
		{ scope: container, dependencies: [] },
	);

	return (
		<div className="phrase-4 parallax" ref={container}>
			<div>
				most of the time&nbsp;<span className="animated-word">build</span>&nbsp;websites for&nbsp;
				<Link href="https://plank.co" text="Plank" ariaLabel="Visit Plank's website" />.
				<img className="web" src={web} alt="" />
			</div>
		</div>
	);
};

export default Phrase4;
