import { useState, useEffect, useRef } from "react";
import "../css/portfolio.css";

const Navigation = () => {
	const [activeSection, setActiveSection] = useState("home");
	const sections = ["home", "about", "projects", "skills", "contact"];

	useEffect(() => {
		const options = {
			threshold: 0.6, // Trigger when 60% of the section is visible
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<>
			<nav>
				<a href="#home" className={activeSection === "home" && "active"}>
					Home
				</a>
				<a href="#about" className={activeSection === "about" && "active"}>
					About Me
				</a>
				<a
					href="#projects"
					className={activeSection === "projects" && "active"}
				>
					My Projects
				</a>
				<a href="#skills" className={activeSection === "skills" && "active"}>
					My Skills
				</a>
				<a href="#contact" className={activeSection === "contact" && "active"}>
					Contact Me
				</a>
			</nav>
			<div
				className="hamburger"
				onClick={() => {
					document.querySelector("nav").classList.toggle("open");
					document.querySelector(".hamburger").classList.toggle("open");
				}}
			>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</>
	);
};

export default Navigation;
