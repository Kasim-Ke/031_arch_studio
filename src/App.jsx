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
        <Route
          path="/about"
          element={
            <>
              <AboutHero />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
