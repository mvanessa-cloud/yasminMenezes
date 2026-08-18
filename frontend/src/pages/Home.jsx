import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import AboutClinic from "../components/AboutClinic.jsx";
import ProceduresGrid from "../components/ProceduresGrid.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutClinic />
      <ProceduresGrid isHome={true} />
    </>
  );
}