import HomeHero from "./components/home/HomeHero";
import HomeSection from "./components/home/HomeSection";
import HomeMid from "./components/home/HomeMid";
import Navbar from "./components/navfoot/Navbar";
import HomeFeatured from "./components/home/HomeFeatured";
import Footer from "./components/navfoot/Footer";

import { Routes, Route } from "react-router-dom";
import PortMain from "./components/portfolio/PortMain";

function App() {
  return (
    <>
      <Navbar />
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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
