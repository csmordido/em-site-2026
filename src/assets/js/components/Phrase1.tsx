import eyelashes from "../../images/eyelashes.svg";

const Phrase1 = () => {
	return (
		<h1 className="phrase-1">
			Hi, I'm{" "}
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
