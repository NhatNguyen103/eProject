import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
function About() {
    return (
        <div>
            <Navbar/>
            <HeroSection
                name="hero-about"
                img="./image/about.jpg"
                title="ABOUT US"
            />
            <AboutPage/>
            <Footer/>
        </div>
      );
}

export default About;