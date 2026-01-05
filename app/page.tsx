import AnnouncementMarquee from "./components/home/AnnouncementMarquee";
import HeroSection from './components/home/HeroSection';
import OurStories from "./components/home/OurStories";
import StandardCurriculum from "./components/home/StandardCurriculum";

export default function Home() {
  return (
    <div >
      <main >
         <AnnouncementMarquee />
          <HeroSection />
          < StandardCurriculum />
          <OurStories />
      </main>
    </div>
  );
}
