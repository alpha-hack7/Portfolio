const Contact = () => {
	return (
		<div className="contact-info">
			<p>
				Tel: <i>+2547 0212 5404</i>
			</p>
			<p>
				Tel: <i>+2547 5956 7199</i>
			</p>
			<p>
				Email: <i>alphaindeje@gmail.com</i>
			</p>
			<p>
				Email: <i>alpha.andambi@gmail.com</i>
			</p>
		</div>
	);
};
const Email = () => {
	return (
		<div className="email">
			<label htmlFor="email">Email:</label>
			<input type="email" name="email" id="email" placeholder="Email" />
		</div>
	);
};
const Message = () => {
	return (
		<div className="message">
			<label htmlFor="message">Message:</label>
			<textarea
				name="message"
				id="message"
				cols="30"
				rows="10"
				placeholder="Enter your message here ...."
			></textarea>
		</div>
	);
};
const SocialMedia = () => {
	return (
		<div className="social-media">
			<Smedia name="Tiktok" src="github.png" />
			<Smedia name="Facebook" src="github.png" />
			<Smedia name="Github" src="github.png" />
			<Smedia name="LinkedIn" src="github.png" />
		</div>
	);
};
const Smedia = ({ name, src }) => {
	return (
		<div className="smedia">
			<img src={src} alt={name} />
			<a href="#">{name}</a>
		</div>
	);
};

const ContactMe = () => {
	return (
		<div className="contact">
			<h2>Contact Me</h2>
			<div>
				<div className="form">
					<Email />
					<Message />
					<button type="submit">Submit</button>
				</div>
				<Contact />
			</div>
			<SocialMedia />
		</div>
	);
};

export default ContactMe;
