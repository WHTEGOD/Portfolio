import { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const Hello = ({ isDarkMode }) => {
    const greetings = [
        "Hello",       // English
        "Hola",        // Spanish
        "Bonjour",     // French
        "こんにちは",   // Japanese
        "नमस्ते",       // Hindi
        "مرحبا",       // Arabic
        "Hallo",       // German
        "Ciao",        // Italian
        "안녕하세요",    // Korean
        "Привет",      // Russian
    ];

    const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
    const [index, setIndex] = useState(0);

    // Change greeting every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 3000); // Change greeting every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [greetings.length]);

    useEffect(() => {
        setCurrentGreeting(greetings[index]);
    }, [index, greetings]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <div className="flex flex-wrap lg:flex-row-reverse">
                    <div className="w-full lg:w-full">
                        {/* Clicking on the greeting text triggers the smooth scroll */}
                        <Link
                            to="Hero" // ID of the section to scroll to
                            smooth={true}
                            duration={500} // Duration of the scroll animation
                        >
                            <div className="text-container">
                                <h1 
                                    className={`text-6xl font-bold transition-all duration-500 text-center cursor-pointer whitespace-nowrap ${
                                        isDarkMode ? "text-white" : "text-black"
                                    }`}
                                >
                                    {currentGreeting}
                                </h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;
