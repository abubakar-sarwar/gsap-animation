import AboutSection from "./_components/home/aboutSection";
import Banner from "./_components/home/banner";
import LetsJourney from "./_components/home/letsJourney";

export default function Home() {
  return (
    <div className="relative">
      <div id="home_page" className="overflow-hidden">
        <Banner />
        <AboutSection />
        <LetsJourney />
      </div>
    </div>
  );
}
