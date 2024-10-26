import About from "../components/about/page";
import Contact from "../components/contact/page";
import Footer from "../components/footer/page";
import Hero from "../components/hero/page";
import Navbar from "../components/navbar/page";
import Projects from "../components/projects/page";
import Service from "../components/services/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
