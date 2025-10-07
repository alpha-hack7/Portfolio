import "../css/portfolio.css";
import {
	AboutMeSection,
	EducationSection,
	SkillsSection,
	InterestsHobbiesSection,
	PersonalValuesSection,
} from "./aboutmes";
import { useState } from "react";

const AboutMe = () => {
	const [section, setSection] = useState("about-me");
	const renderSection = () => {
		switch (section) {
			case "about-me":
				return <AboutMeSection />;
			case "education":
				return <EducationSection />;
			case "skills":
				return <SkillsSection />;
			case "personal-values":
				return <PersonalValuesSection />;
			case "interests-hobbies":
				return <InterestsHobbiesSection />;
			default:
				return <AboutMeSection />;
		}
	};
	return (
		<>
			<div className="about-me" id="about">
				<h1>Hi, Alpha Here!</h1>
				<div>
					<img src="Alpha 1.jpg" alt="my picture" />
					<div id="nav">
						<ul className="about-me-list">
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setSection("about-me");
									}}
								>
									About Me
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setSection("education");
									}}
								>
									Education
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setSection("skills");
									}}
								>
									Skills
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setSection("personal-values");
									}}
								>
									Personal Values
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setSection("interests-hobbies");
									}}
								>
									Interests/Hobbies
								</a>
							</li>
						</ul>
						{renderSection()}
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
