import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>
        <div className="p-5 space-y-5">
            <img src="https://dummyjson.com/image/150" alt="Contact" className="w-20 rounded-full" />
            <h3>Let's connect!</h3>
            <p>Get in touch with me through email or social media.</p>
            <p>sifat355y@gmail.com</p>
            <ul>
                {socials.map(({id,bg,link, icon, text})=>(
                    <li key={id} style={{backgroundColor:bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>

        </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow