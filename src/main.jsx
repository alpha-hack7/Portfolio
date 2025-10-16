import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Navigation from "./components/navigation";
import AboutMe from "./components/about_me";
import MyProjects from "./components/my_projects";
import Technologies from "./components/skillset";
import ContactMe from "./components/contact_me";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Navigation />
		<HeroSection />
		<AboutMe />
		<MyProjects />
		<Technologies />
		<ContactMe />
		<Footer />
	</StrictMode>
);
