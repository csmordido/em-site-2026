import { useRef } from "react";
import work from "../model/work";
import Link from "./Link";
import ContentWrapper from "./ContentWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
	const container = useRef<HTMLUListElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;

			ScrollTrigger.create({
				trigger: container.current,
				start: "top center",
				animation: gsap.from(".work__item", {
					yPercent: 15,
					opacity: 0,
					duration: 1,
					ease: "power2.out",
					stagger: 0.2,
				}),
			});
		},
		{ scope: container, dependencies: [] },
	);

	return (
		<section id="work" className="work full-width">
			<ContentWrapper>
				<h2 className="work__title">Work</h2>
				<ul className="work__list" ref={container}>
					{work.map((item) => {
						return (
							<li className="work__item" key={item.title}>
								<Link href={item.link} text={item.title} ariaLabel={item.title} />
							</li>
						);
					})}
				</ul>
			</ContentWrapper>
		</section>
	);
};

export default Work;
