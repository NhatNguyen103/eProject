import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const CheckoutPage = () => {
  const { items, cartTotal, updateItemQuantity, emptyCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    Swal.fire({
      title: "Thank You",
      text: "You have successfully made a purchase!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setShowAlert(true);
      // Clear the cart after the purchase alert is closed
      emptyCart();
    });
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You are about to remove this item from your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it!",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          updateItemQuantity(item.id, item.quantity - 1);
        }
      });
    } else {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  return (
    <div>
      <Navbar />
      <HeroSection
        name="hero-about"
        img="./image/about.jpg"
        title="Checkout Page"
      />

      <h2>Order details</h2>
      <div className="container border">
        <div className="row ">
        <div className="col-xl-6">
          <img src="./Image/mua1.jpeg" alt="" />
        </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <ul className="list-unstyled">
              {items.map((item) => (
                <li key={item.id} className="d-flex align-items-center mb-3">
                <img src={item.pic} alt="" />
                  <div />
                  <div className="ml-3">
                    {item.title} - {item.quantity} x {item.newPrice}
                  </div>
                  <div className="ml-auto col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <button
                      onClick={() => handleDecrement(item)}
                      className="btn btn-secondary"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="btn btn-secondary ms-2"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p style={{ color: "red", fontSize: " 20px" }}>Total: {cartTotal}</p>

      {/* Hiển thị nút chỉ khi showAlert là false */}
      <button onClick={handleShowAlert} className="btn btn-success">
        Purchase
      </button>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
