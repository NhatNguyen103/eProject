import React from "react";
import "./Footer.css"
function Footer() {
  const address = "590 Đ. Cách Mạng Tháng 8, Phường 11, Quận 3, Thành phố Hồ Chí Minh 700000";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <>
      <footer style={{ backgroundColor: 'grey', color: 'white' }}>
        <div className="container footer">
          <div className="row">
            <div></div>
            <div className="col-md-3 col-sm-6">
              <h3>FANoFAN</h3>
              <hr style={{ width: '300px' }} />
              <p>
                Whether you have an industrial complex or a small shop, our
                experts are here to make your life easier, more comfortable, and
                less expensive.
              </p>
            </div>

            <div className="col-md-3 col-sm-6">
              <h3>COMPANY</h3>
              <hr className="Hr" />

              <p><a href="/" className="text-white link1">Home</a></p>
              <p><a href="/About" className="text-white link1">About</a></p>
              <p><a href="/Categories" className="text-white link1">Categories</a></p>
              <p><a href="/Gallery" className="text-white link1">Gallery</a></p>
            </div>
            <div className="col-md-3 col-sm-6">
            <a href={googleMapsLink} className="text-white  " style={{textDecoration: "none"}}>
                <i className="fas fa-map-marker-alt" style={{ width: '30px' }}></i>  <iframe
                title="Google Map"
                src="./Image/anh1.png"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
            <a href="/Contact" className="text-white"><h3>CONTACT US</h3></a>
              

              <hr />
              <p>250 Rt 59, Airmont NY 10901</p>
              <p>info@fanofan.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
              <a href="https://www.facebook.com" className="text-white"><i className="fab fa-facebook-f" style={{ width: '30px' }}></i></a>
              <a href="https://www.instagram.com" className="text-white"><i className="fab fa-instagram" style={{ width: '30px' }}></i></a>
              <a href="https://twitter.com" className="text-white"><i className="fab fa-twitter" style={{ width: '30px' }}></i></a>
              <a href="https://www.google.com" className="text-white"><i className="fab fa-google" style={{ width: '30px' }}></i></a>
            </div>
           
          </div>
        </div>
      </footer>
      <footer>
        <div className="bg-black text-white">
          © 2023 Copyright: FANoFAN
        </div>
      </footer>
    </>
  );
}

export default Footer;