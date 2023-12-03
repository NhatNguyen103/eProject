import "./AboutPage.css";
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
function AboutPage() {
  return (
    <div className="name ">
      <span className="name1">THE FAN THAT KEEPS YOU RUNNING...
        <hr className="hr"></hr>
      </span>
      <span className="pd1">
        In 1999, the FANOFAN Company was born. Kind of. Then called the HTTH Fan Co. We first made our mark selling <br></br> massive ceiling fans that spun slowly but moved astounding amounts of air. The fans kept large spaces that lacked air conditioning, such as <br></br> factories and dairy barns, feeling cool and comfortable—and soon enough, plenty of other customers wanted in.
        Things moved fast after <br></br> that (and kept moving). Only a few years later, we officially changed our name after customers kept calling and asking if we made “those <br></br> fans ceiling” When churches wanted to install fans to keep congregations comfortable, we developed the first silent fan motor to meet <br></br> their need. </span>
      <br></br>
      <span className="pd2">
        We created a residential fan that blew away ENERGY STAR® ratings and won awards worldwide.
        In 2014, we had the bright idea to create <br></br>
        an LED fixture made of heavy-duty anodized, extruded aluminum so it can handle whatever you can dish out, launching a division <br></br> appropriately called Fan Light™. </span>
      <br></br>
      <span className="pd3">
        And we’ve backed everything with serious research, intensive engineering, and an almost obsessive drive to innovate and improve. <br></br> No matter what we’re doing, we go hard every single day, and we’re not stopping.
      </span>
      <nav className="clear"></nav>
      <div className="container my-our-team mb-5"><hr />
          <h2 className="our-team-header">Members of the group</h2>
          <div className="clear"></div>

          <div className="row justify-content-center">
            {/* <!-- Minh Nhật --> */}
            <div className="col-md-3 col-sm-6 col-12 mb-2">
              <div className="our-team">
                <div className="img">
                  <img src="./image/corn.png" alt="logo" className="imgi" />
                </div>
                <h3 className="title">Minh Nhật</h3>
                <span className="post">Leader</span>
              </div>
            </div>
            {/* Văn Nhật */}
            <div className="col-md-3 col-sm-6 col-12 mb-2">
              <div className="our-team">
                <div className="img">
                  <img src="./image/Nhat.png" alt="logo1" className="imgi" />
                </div>
                <h3 className="title">Văn Nhật</h3>
                <span className="post">Deputy group</span>
              </div>
            </div>
            {/* Thanh Nhã */}
            <div className="col-md-3 col-sm-6 col-12 mb-2">
              <div className="our-team">
                <div className="img">
                  <img src="./image/nha.png" alt="logo2" className="imgi" />
                </div>
                <h3 className="title"> Thanh Nhã</h3>
                <span className="post">Members</span>
              </div>
            </div>
            {/* Gia Phúc */}
            <div className="col-md-3 col-sm-6 col-12 mb-2">
              <div className="our-team">
                <div className="img">
                  <img src="./image/phuc.png" alt="logo3" className="imgi" />
                </div>
                <h3 className="title"> Gia Phúc</h3>
                <span className="post">Members</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      <div className="factory-image">
        <p className="factory-p">Get connected with us on social networks!</p>
        <Container>
          <div className="factory-icon my-link ">
            <a href="https://www.facebook.com" className="a">
              <FontAwesomeIcon icon={faFacebook} className="fb" />
            </a>
            <a href="https://www.instagram.com" className="a">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com" className="a">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.google.com" className="a">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutPage;