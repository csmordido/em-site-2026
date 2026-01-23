import type { ReactNode } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

interface ScrollSmootherComponentProps {
	children: ReactNode;
}

const ScrollSmootherComponent = ({ children }: ScrollSmootherComponentProps) => {
	useGSAP(() => {
		const smoother = ScrollSmoother.create({
			smooth: 1.25,
			wrapper: "#smooth-wrapper",
			normalizeScroll: true,
			effects: true,
		});

		smoother.effects(".parallax", { lag: 0.1 });
	}, []);

	return (
		<div id="smooth-wrapper">
			<div id="smooth-content">{children}</div>
		</div>
	);
};

export default ScrollSmootherComponent;
