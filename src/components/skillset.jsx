const Technologies = () => {
	return (
		<>
			<div className="my-skills">
				<h2>Skillset</h2>
				<div className="skills">
					<Skill src="OIP.webp" name="JavaScript" />
					<Skill src="OIP.webp" name="JavaScript" />
					<Skill src="OIP.webp" name="JavaScript" />
					<Skill src="OIP.webp" name="JavaScript" />
				</div>
			</div>
		</>
	);
};

const Skill = ({ src, name }) => {
	return (
		<div id="skill">
			<img src={src} alt={name} />
			<div className="info">I am very proficient in Javascript</div>
		</div>
	);
};

export default Technologies;
