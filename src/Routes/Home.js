import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import HomePage from "../Components/HomePage";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection
                name="hero"
                img="./Image/home.jpg"
                title="FANoFAN"
                text="...CONTROL THE WEATHER INSIDE"
            />
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default Home;