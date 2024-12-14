import HomeHero from "./components/home/HomeHero";
import HomeSection from "./components/home/HomeSection";
import HomeMid from "./components/home/HomeMid";
import Navbar from "./components/navfoot/Navbar";
import HomeFeatured from "./components/home/HomeFeatured";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeSection />
      <HomeMid />
      <HomeFeatured />
    </>
  );
}

export default App;
