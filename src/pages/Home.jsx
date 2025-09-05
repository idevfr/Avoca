import CtaSection from "../components/CtaSection";
import DescriptionSection from "../components/DescriptionSection";
import FaqSection from "../components/FaqSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import ShowcaseSection from "../components/ShowcaseSection";
import NavBar from "../ui/NavBar";

function Home() {
  return (
    <div className="font-Truculenta bg-orange-100 text-green-50">
      <NavBar />
      <HeroSection />
      <DescriptionSection />
      <ShowcaseSection />
      <CtaSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default Home;
