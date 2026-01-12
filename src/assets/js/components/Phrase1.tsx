import { useRef } from "react";
import eyelashes from "../../images/eyelashes.svg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Phrase1 = () => {
	const container = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!container.current) return;
		},
		{ scope: container },
	);

	return (
		<h1 className="phrase-1" ref={container}>
			Hi, I'm&nbsp;
			<span className="name">
				<p className="name__detail">eh-yel</p>Eyel
			</span>
			&nbsp; and I make websites pr
			<span className="pretty">
				<img className="pretty__drawing" src={eyelashes} alt="" />e
			</span>
			tty
		</h1>
	);
};

export default Phrase1;
