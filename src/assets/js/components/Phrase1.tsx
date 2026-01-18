import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EyeLashesSVG from "./EyeLashesSVG";

const Phrase1 = () => {
	const container = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;

			const tl = gsap
				.timeline({ defaults: { duration: 1, stagger: 0.2, ease: "power2.out" } })
				.from(".name__detail", {
					y: 10,
					opacity: 0,
				})
				.fromTo(
					".drawSvg",
					{
						drawSVG: "100% 100%",
					},
					{ drawSVG: "100% 0%" },
				);

			ScrollTrigger.create({
				trigger: container.current,
				start: "center center",
				animation: tl,
			});
		},

		{ scope: container, dependencies: [] },
	);

	return (
		<h1 className="phrase-1 parallax" ref={container}>
			Hi, I'm&nbsp;
			<span className="name">
				<p className="name__detail">eh-yel</p>Eyel
			</span>
			&nbsp; and I make websites pr
			<span className="pretty">
				<EyeLashesSVG />e
			</span>
			tty
		</h1>
	);
};

export default Phrase1;
