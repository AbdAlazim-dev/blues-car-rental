import React from "react";
import About from "../components/About";
import PagesHero from "../components/PagesHero";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import Git from "../components/Git";
function AboutPage() {
  return (
    <>
      <PagesHero section="من نحن" sectionDiscription="أكثر عن الشركة" />
      <About />
      <Plan />
      <Git />
      <Footer />
    </>
  );
}
export default AboutPage;
