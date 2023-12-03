import './Hero.css';
function HeroSection(prop) {
    return (
        <div>
            <div className={prop.name}>
                <img src={prop.img} alt="HeroImg" />
            </div>
            <div className="hero-text">
                <h1>{prop.title}</h1>
                <p>{prop.text}</p>
            </div>
        </div>
      );
}

export default HeroSection;