
import FanList from "../Components/FanList";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
    return (
        <div>
            <Navbar />
            <HeroSection
                name="hero-cat"
                img="./image/cate.jpg"
                title="GALLERY"
            />
            <FanList/>
            <Footer/>
        </div>
    );
}

export default Gallery;