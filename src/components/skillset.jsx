import ReactImage from "../assets/react.svg";
import VscodeImage from "../assets/vscode.svg";
import GithubImage from "../assets/github.svg";
import FigmaImage from "../assets/figma.svg";
import JavaScriptImage from "../assets/js.svg";
import HtmlImage from "../assets/html.svg";
import CssImage from "../assets/css.svg";
import DjangoImage from "../assets/django.svg";
import "../css/technologies.css";
const Technologies = () => {
	return (
		<>
			<div className="my-skills" id="skills">
				<h2>Skillset</h2>
				<div className="all-skills">
					<div className="skills">
						<Skill src={ReactImage} name="React" />
						<Skill src={VscodeImage} name="VSCode" />
						<Skill src={GithubImage} name="GitHub" />
						<Skill src={FigmaImage} name="Figma" />
						<Skill src={JavaScriptImage} name="JavaScript" />
						<Skill src={HtmlImage} name="HTML" />
						<Skill src={CssImage} name="CSS" />
						<Skill src={DjangoImage} name="Django" />
					</div>
				</div>
			</div>
		</>
	);
};

const Skill = ({ src, name }) => {
	return (
		<div id="skill">
			<img src={src} alt={name} />
			<div className="info">
				<h3>{name}</h3>
				<p>I am very proficient in {name}</p>
			</div>
		</div>
	);
};

export default Technologies;
