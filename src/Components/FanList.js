import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './FanList.css';
import { useCart } from 'react-use-cart'; // Import useCart hook

function FanList() {
  const { addItem } = useCart(); // Destructure addItem from useCart hook

  const [Celling, setCelling] = useState([]);
  useEffect(() => {
    fetch("https://653f52039e8bd3be29e0426c.mockapi.io/fans")
      .then((response) => response.json())
      .then((data) => setCelling(data));
  }, []);
  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.newPrice,
      quantity: 1,
    });
  };

  return (
    <div className="container  ">
       <a href="#Special" style={{ textDecoration: 'none' , }}>
        <button
          id="special-offer-btn"
          style={{ backgroundColor: 'red', color: 'white', width: '20%',  }}
        >
          SPECIAL OFFER <i className="fas fa-star" aria-hidden="true"></i>
        </button>
      </a>
      <div className="row ">
        {Celling.map((Cell, index) => (
          <div key={Cell.id} className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
            <div className=" image-container user-container">
              <img src={Cell.pic} alt="" className="img-fluid hover-effect imagefan" />
              <div className="text-center">
                {" "}
                {/* Thêm class text-center để căn giữa nội dung */}
                <button className="cart-fan" onClick={() => handleAddToCart(Cell)}>
                  <i className="fa-solid fa-cart-plus"></i>
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div>
      <img 
      id="Special"
        src="https://d33wubrfki0l68.cloudfront.net/061dd3d51405a34696875c3011dc56309f06a6fb/dec4b/static/img/special-sales/special-offer_prev_ui.png"
        alt=""
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://www.ushafans.com/sites/default/files/wall-fan-RSP_2055_0.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3 >FUZION WALL FAN SERIES RED ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$90.00</del>
              </p>
              <p>$60.99</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>

          </div>
          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://www.ushafans.com/sites/default/files/Wall-Mist-air-Icy-Remote-WF.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3>FERASTIN TURBO ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$85.00</del>
              </p>
              <p>$64.99.</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/23161aa02d28d03af659151c473bfcd77e768bab/8fbd3/static/img/special-sales/fds_s3_white_b-upload.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3>FERASTIN TURBO ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$200.00</del>
              </p>
              <p>$169.99</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://www.ushafans.com/sites/default/files/Dynamo.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3>DYNAMO SUPER ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$120.00</del>
              </p>
              <p>$99.99</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/2861b6e276396fc571446227b28a9b3485f4d05f/ae77d/static/img/special-sales/special-ceiling-fan.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3>CARMEL CEILING FAN ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$300.00</del>
              </p>
              <p>$249.99</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 border rounded p-3">
            <div className="img-container">
              <img
                src="https://www.honeywellstore.com/store/images/products/large_images/hyf500-honeywell-turboforce-power-tower-fan.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="product-info">
              <h3>HUGO FAN ☘ ☘</h3>
              <p>
                <del style={{ color: "grey" }}>$250.00</del>
              </p>
              <p>$190.90</p>
              <small style={{ color: "#ff9800" }}>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
                <i className="fas fa-star" aria-hidden="true"></i>
              </small>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FanList;
