import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={Logo} className="mx-2" width="50" height="33" alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/pulkit-tiwari-1b1b1b1b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/pulkit-tiwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/pulkit.tiwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a
                    href="https://twitter.com/pulkit_tiwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter">
                    <FaTwitter />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
