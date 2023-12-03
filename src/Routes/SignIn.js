import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import "./SignIn.css";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      

    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("Your must fill in this section"),
      password: Yup.string()
        .min(8, " Your PassWord must be at least 8 characters! ")
        .required("Your must fill in this section"),
        
    }),
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        // Thực hiện đăng ký
        window.alert("Registration successful! Welcome to our website.");
        navigate("/");
      } else {
        window.alert("Please fill in the correct login information!");
      }
    },
  });
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Navbar />
        <HeroSection
          name="hero-contact"
          img="/Image/contact.jpg"
          title="LOG IN "
        />
      </div>
      <div className="container">
        <div className="row justify-content-around class my-3 bg-light p-3">
        <div className="col-md-6 col-sm-6 col-xl-6">
          <img src="./Image/anhlog.webp" alt="" />
        </div>
          <div className="col-md-6 col-sm-6 col-xl-6 ">
            <h1>Log In</h1>
            
            <img
              src="/image/quat.jpg"
              alt=""
              className="rotating-fan rounded-circle"
            />
            
            <form onSubmit={formik.handleSubmit} className="signup-form">
              <div>
                <label className="form-group text-uppercase  form-label"></label>
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label className="form-group text-uppercase  form-label"></label>
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your PassWord"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="form-control"
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="error-message">{formik.errors.password}</div>
                ) : null}
              </div>


<input 
                type="submit"
                value="Log In"
                class="btn btn-primary mt-3"
                disabled={Object.keys(formik.errors).length > 0}
              />

            </form>
            {/* Link liên kết để đăng nhập  */}
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
