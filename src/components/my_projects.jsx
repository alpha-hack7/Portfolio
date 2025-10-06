const MyProjects = () => {
	return (
		<>
			<div className="my-projects">
				<h2>My Projects</h2>
				<div className="projects">
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</div>
		</>
	);
};
const Project = () => {
	return (
		<div className="project">
			<h3>FutureWork</h3>
			<p>Job & Internship Application Platform</p>
			<p>Technologies Used: </p>
			<p>
				<i>Frontend ---&gt; React Js</i>
			</p>
			<p>
				<i>Backend ---&gt; Python (Django) </i>
			</p>
			<p>
				<i>Database ---&gt; MySQL</i>
			</p>
			<code>full source code ---&gt; github</code>
		</div>
	);
};

export default MyProjects;
