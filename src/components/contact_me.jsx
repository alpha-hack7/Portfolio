import { useForm, ValidationError } from "@formspree/react";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Tiktok from "../assets/tiktok.png";
import "../css/contact.css";

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

function ContactForm() {
	const [state, handleSubmit] = useForm("myzndevl");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="email">
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Email Address"
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div className="message">
				<label htmlFor="message">Message: </label>
				<textarea
					id="message"
					name="message"
					placeholder="Type your message here ...."
					cols={30}
					rows={10}
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
}

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
				<ContactForm />
				<Contact />
			</div>
			<SocialMedia />
		</div>
	);
};

export default ContactMe;
