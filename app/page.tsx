import AboutSection from "./_components/home/aboutSection";
import Banner from "./_components/home/banner";
import Embark from "./_components/home/embark";
import LetsJourney from "./_components/home/letsJourney";
import Steps from "./_components/home/steps";

export default function Home() {
  return (
    <div className="relative">
      <div id="home_page" className="overflow-hidden">
        <Banner />
        <AboutSection />
        <LetsJourney />
        <Embark />
        <Steps />
      </div>
    </div>
  );
}
