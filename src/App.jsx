import "./App.css";
import { NavBar, Footer } from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { ArticleSection } from "./components/ArticleSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
