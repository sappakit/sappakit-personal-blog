import { NavBar, Footer } from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { ArticleSection } from "@/components/ArticleSection";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default HomePage;
