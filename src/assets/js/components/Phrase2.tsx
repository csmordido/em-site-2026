import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Phrase2 = () => {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;

			const animatedWord = SplitText.create(".animated-word", {
				type: "words, chars",
			});

			ScrollTrigger.create({
				trigger: container.current,
				start: "top center",
				end: "bottom center",
				scrub: true,
				once: true,
				animation: gsap.to(animatedWord.chars, {
					color: "#5bc0be",
					stagger: 0.1,
					duration: 0.5,
					ease: "power2.out",
				}),
			});
		},
		{ scope: container, dependencies: [] },
	);

	return (
		<div className="phrase-2 parallax" ref={container}>
			<p>
				While ensuring content is easily <span className="animated-word">accessible</span>
			</p>
		</div>
	);
};

export default Phrase2;
