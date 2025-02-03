import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Contacts = () => {
    
        const contact = {
            address:"Dehradun , Uttarakhand",
            phoneNo:"+91 7014167303",
            email:"tpulkit87@gmail.com",
        };
    

    return (
        <div id="contact" className="border-t border-stone-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">
                {contact.address}
            </p>
            <p className="my-4">
                {contact.phoneNo}
            </p>
            <a href="#" className="border-b">
                {contact.email}
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/pulkit-tiwari-30107a2b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/WHTEGOD"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>
    </div>
    );
};

export default Contacts;
