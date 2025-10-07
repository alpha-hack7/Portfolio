const Navigation = () => {
	return (
		<>
			<nav>
				<a href="#home">Home</a>
				<a href="#about">About Me</a>
				<a href="#projects">My Projects</a>
				<a href="#contact">Contact Me</a>
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
