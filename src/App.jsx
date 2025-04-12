import React, { useState } from "react";
import SidebarNavbar from "./Components/Bar";
import Contacts from "./Components/Contacts";
import Experience from "./Components/Experience";
import Hello from "./Components/Hello";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import AboutMe from "./Components/Aboutme";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="overflow-x-hidden antialiased transition-all duration-500">
      <div className="fixed inset-0 -z-10">
        {isDarkMode ? (
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        ) : (
          <div className="relative h-full w-full bg-white">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-8">
        <SidebarNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hello isDarkMode={isDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <AboutMe isDarkMode={isDarkMode} />
        <Technologies isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contacts isDarkMode={isDarkMode} />
        
      </div>
    </div>
  );
}
