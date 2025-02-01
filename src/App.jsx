import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About.jsx";
import Service from "./Components/Service.jsx";
import Projects from "./Components/Projects.jsx";
import Contactus from "./Components/Contactus.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Projects/> 
    <Contactus />
    <Footer />
    </>
  )
}

export default App
