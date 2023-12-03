import { useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import "./HomePage.css";
function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <div className="homepage2">
                <div className="hometext">
                    <h3>THE FUTURE OF COOLING TECHNOLOGY</h3>
                    <hr />
                    <p>We at <b>FANoFAN</b> are comitted to bringing you the best and latest technology, anywhere and anytime.</p>
                    <p>From factories to homes and everywhere in between, FANoFAN delivers comfort, style, and energy savings that make life and work more enjoyable.</p>
                    <p>Our fans are easy to install, effortless to maintain and deliver the same efficiency as an industry equivalent that costs more.</p>
                    <button className="viewmore1" onClick={() => navigate(`/About`)}>About Us<GrLinkNext /></button>
                </div>
                <div className="homeimage">
                    <img src="./Image/home1.png" alt="home1" />
                    <img src="./Image/home2.png" alt="home2" />
                </div>
            </div>
            <div className="industries">
                <h1>FANOFAN IN EVERY INDUSTRY</h1><hr />
                <div>
                    <div className="container px-4 ">
                        <div className="row gx-5">
                            <div className="col-lg-7 col-md-7 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
                                <div className="container px-0">
                                    <div className="row gx-4 mt-5">
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center"><b className="name-b">Education</b>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage2.png" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center"><b className="name-b">Public Spaces</b>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage3.png" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-4 mt-5">
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center"><b className="name-b">Fitness</b>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage4.png" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center"><b className="name-b">Factories</b>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage5.png" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 mx-auto">
                                <div className="industries-standing-fan ">
                                    <img src="./image/homeimage1.png" className="mx-auto img-fluid" alt="..." />
                                </div>
                                <button className="viewmore" onClick={() => navigate(`/Categories`)}>View more fans <GrLinkNext /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage1">
                <div className="hometext">
                    <h2>Ceiling Fans</h2><hr />
                    <p>Ceiling fans reduce perceived temperature. Ceiling fans not only circulate air and balance the heat in the room, but also spread a gentle breeze from the ceiling, effectively reducing perceived temperature levels. The perceived temperature can vary by approximately 3 degrees Celsius when there is a breeze compared to when there is no breeze. Let the device help you create a comfortable space - Motion sensor The motion sensor detects human movement and activity within its detection range. The sensor will then respond to activity intensity by changing the fan speed.</p>
                </div>
                <div className="homeimage">
                    <img src="./Image/ceil1.jpg" alt="ceil1" />
                    <img src="./Image/ceil5.jpg" alt="ceil5" />
                </div>
            </div>
            <div className="homepage2">
                <div className="hometext">
                    <h2>Standing Fans</h2><hr />
                    <p>Adjust the height to the correct height. Standing electric fans are more compact and lower. Abundant airflow despite its compact size. Adjustable height, to blow air to you whether you are sitting on a sofa or chair. Adjust speed for comfort. Adjust speed with the convenient remote control. Optionally choose from 3 speed levels - low, medium or high. The device can create a pleasant cool breeze at all times. Reliable type W fuse. Electric fans are equipped with “W-type fuses” for all models. In case of abnormal operation, the thermal fuse and current fuse will trip to stop the fan. Two times more reliable, providing peace of mind.</p>
                </div>
                <div className="homeimage">
                    <img src="./Image/stand5.png" alt="stand5" />
                    <img src="./Image/stand8.png" alt="stand8" />
                </div>
            </div>
            <div className="homepage1">
                <div className="hometext">
                    <h2>Table Fans</h2><hr />
                    <p>So compact that it can be placed anywhere. Can be carried from room to room. Compact yet powerful. Adjust speed for comfort. Optionally choose from 3 speed levels - low, medium or high. The speed can be adjusted using the switch on the fan. The device can create a pleasant cool breeze at all times. In case of abnormal operation, the thermal fuse and current fuse will trip to stop the fan. Two times more reliable, providing peace of mind.</p>
                </div>
                <div className="homeimage">
                    <img src="./Image/Tab6.png" alt="tab6" />
                    <img src="./Image/Tab7.jpg" alt="tab7" />
                </div>
            </div>
            <div className="homepage2">
                <div className="hometext">
                    <h2>Exhaust Fans</h2><hr />
                    <p>Super low noise: Molded housing and fan surface minimizes noise from the fan and motor escaping to the outside. This technology can also reduce operating noise to an incredibly low level thanks to “Resonant Noise Absorption” operation, creating a quiet environment. Energy saving: The fan is compatible with a DC (Direct Current) motor to reduce power consumption and save energy. DC motors increase in temperature less than AC (Alternating Current) motors, so the recalibration time of DC motors is relatively longer.</p>
                </div>
                <div className="homeimage">
                    <img src="./Image/Exh1.png" alt="Exh1" />
                    <img src="./Image/Exh3.png" alt="Exh5" />
                </div>
            </div>
            <div className="navi">
                <button className="viewmore" onClick={() => navigate(`/About`)}>About Us</button>
                <button className="viewmore" onClick={() => navigate(`/Signin`)}>Login</button>
                <button className="viewmore" onClick={() => navigate(`/Categories`)}>Categories</button>
                <button className="viewmore" onClick={() => navigate(`/Gallery`)}>Gallery</button>
                <button className="viewmore" onClick={() => navigate(`/Contact`)}>Contact Us</button>
            </div>

        </div>
    );
}

export default HomePage;