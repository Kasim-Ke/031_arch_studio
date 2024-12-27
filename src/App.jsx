import HomeHero from "./components/home/HomeHero";
import HomeSection from "./components/home/HomeSection";
import HomeMid from "./components/home/HomeMid";
import Navbar from "./components/navfoot/Navbar";
import HomeFeatured from "./components/home/HomeFeatured";
import Footer from "./components/navfoot/Footer";

import { Routes, Route } from "react-router-dom";
import PortMain from "./components/portfolio/PortMain";
import ScrollToTop from "./components/ScrollToTop";
import AboutHero from "./components/about/AboutHero";
import AboutHeritage from "./components/about/AboutHeritage";
import AboutLeaders from "./components/about/AboutLeaders";
import ContactHero from "./components/contact/ContactHero";
import ContactDetail from "./components/contact/ContactDetail";
import ContactMap from "./components/contact/ContactMap";
import ContactForm from "./components/contact/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomeHero />
              <HomeSection />
              <HomeMid />
              <HomeFeatured />
            </>
          }
        />

        {/* Portfolio Page */}
        <Route
          path="/portfolio"
          element={
            <>
              <PortMain />
            </>
          }
        />
        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutHero />
              <AboutHeritage />
              <AboutLeaders />
            </>
          }
        />
        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactHero />
              <ContactDetail />
              <ContactMap />
              <ContactForm />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
