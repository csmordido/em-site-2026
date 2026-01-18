import Header from "./Header";
import Phrase1 from "./Phrase1";
import Phrase2 from "./Phrase2";
import Phrase3 from "./Phrase3";
import Phrase4 from "./Phrase4";
import ScrollSmootherComponent from "./ScrollSmootherComponent";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother, SplitText, useGSAP);

function App() {
	return (
		<ScrollSmootherComponent>
			<Header />
			<Phrase1 />
			<Phrase2 />
			<Phrase3 />
			<Phrase4 />
		</ScrollSmootherComponent>
	);
}

export default App;
