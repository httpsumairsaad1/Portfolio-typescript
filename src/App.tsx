import { useEffect, useState } from "react";
import About from "./components/About/About";
import Achievements from "./components/Achievement/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Tech Stack/TechStack";
import Loader from "./components/UI/Loader";
import ModeSwitcher from "./components/UI/ModeSwitcher";
import ScrollUp from "./components/UI/ScrollUp";

function App() {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 3000);
  }, []);

  if (showLoader)
    return (
      <div className="w-screen h-screen overflow-hidden bg-transparent">
        <Loader />;
        <ModeSwitcher isVisible={false} />
      </div>
    );
  return (
    <>
      <Navbar />
      <main className="min-w-[360px] overflow-hidden">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ModeSwitcher />
      <ScrollUp />
    </>
  );
}

export default App;
