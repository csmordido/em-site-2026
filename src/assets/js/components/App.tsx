import Header from "./Header";
import Phrase1 from "./Phrase1";
import Phrase2 from "./Phrase2";
import Phrase3 from "./Phrase3";
import Phrase4 from "./Phrase4";
import Work from "./Work";
import Footer from "./Footer";
import ScrollSmootherComponent from "./ScrollSmootherComponent";
import ContentWrapper from "./ContentWrapper";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, ScrollSmoother, ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother, SplitText, useGSAP, ScrollToPlugin);

function App() {
	return (
		<ScrollSmootherComponent>
			<ContentWrapper>
				<Header />
				<Phrase1 />
				<Phrase2 />
				<Phrase3 />
				<Phrase4 />
				<Work />
				<Footer />
			</ContentWrapper>
		</ScrollSmootherComponent>
	);
}

export default App;
