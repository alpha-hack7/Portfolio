import Image from "../assets/bow.png";

function HeroSection() {
	return (
		<>
			<div className="hero-section" id="home">
				<div className="welcome-info">
					<h1>
						Hi, I am <span>Alpha Indeje</span>
					</h1>
					<h3>A completely different perception ---&gt; to be changed</h3>
					<h2 className="my-philosophy">
						<span id="1" style={{ color: "yellow" }}>
							Conceptualize.{" "}
						</span>
						<span id="2" style={{ color: "blue" }}>
							Engineer.{" "}
						</span>
						<span id="3" style={{ color: "green" }}>
							Launch.{" "}
						</span>
						<span id="4" style={{ color: "red" }}>
							Evolve.{" "}
						</span>
					</h2>
					<a href="/cv.pdf" target="_blank" className="my-cv">
						My CV
					</a>
				</div>
				<div className="all-me">
					<div className="left-arrow">
						<img src={Image} alt="navigation arrow" />
					</div>
					<article>
						<h2>A child of God</h2>
						<div>
							But as many as received Him, He gave them the power to be called
							sons of God <i>John 1:12</i>
						</div>
					</article>
					<article>
						<h2>A child of God</h2>
						<div>
							But as many as received Him, He gave them the power to be called
							sons of God <i>John 1:12</i>
						</div>
					</article>
					<article>
						<h2>A child of God</h2>
						<div>
							But as many as received Him, He gave them the power to be called
							sons of God <i>John 1:12</i>
						</div>
					</article>
					<article>
						<h2>A child of God</h2>
						<div>
							But as many as received Him, He gave them the power to be called
							sons of God <i>John 1:12</i>
						</div>
					</article>
					<article>
						<h2>A child of God</h2>
						<div>
							But as many as received Him, He gave them the power to be called
							sons of God <i>John 1:12</i>
						</div>
					</article>
					<div className="right-arrow">
						<img src={Image} alt="navigation arrow" />
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
