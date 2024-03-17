import AboutSection from "./_components/home/aboutSection";
import Banner from "./_components/home/banner";

export default function Home() {
  return (
    <div className="relative">
      <div id="home_page" className="overflow-hidden">
        <Banner />
        <AboutSection />
      </div>
    </div>
  );
}
