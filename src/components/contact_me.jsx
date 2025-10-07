import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Tiktok from "../assets/tiktok.png";

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
			<Smedia
				name="Tiktok"
				src={Tiktok}
				dest="https://www.tiktok.com/@alpha.indeje"
			/>
			<Smedia
				name="Facebook"
				src={Facebook}
				dest="https://www.facebook.com/profile.php?id=100093092425767"
			/>
			<Smedia
				name="Github"
				src={Github}
				dest="https://github.com/alpha-hack7"
			/>
			<Smedia
				name="LinkedIn"
				src={LinkedIn}
				dest="https://www.linkedin.com/feed/"
			/>
		</div>
	);
};
const Smedia = ({ name, src, dest }) => {
	return (
		<div className="smedia">
			<a href={dest} rel="noopener noreferrer">
				<img src={src} alt={name} />
			</a>
		</div>
	);
};

const ContactMe = () => {
	return (
		<div className="contact" id="contact">
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
