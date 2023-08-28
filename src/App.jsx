import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ModelsPage from "./Pages/ModelsPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </>
  );
}

export default App;
