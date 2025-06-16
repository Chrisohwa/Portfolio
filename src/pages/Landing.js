import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/sections/Header"
import About from "../components/sections/About"
import Skills from "../components/sections/Skill"
import Projects from "../components/sections/Projects"
import Contacts from "../components/sections/Contacts"
import Footer from "../components/sections/Footer"


const Landing = () => {
  return (
    <Box maxW="100vw" overflowX="hidden">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </Box>
  );
};

export default Landing;
