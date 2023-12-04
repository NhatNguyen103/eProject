import { useNavigate , Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();

  const handleShowAlert = () => {
    Swal.fire({
      title: "Thank You",
      text: "Resigter  in successfully! ",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      ConfirmPassWord: "",
      Phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, " Your name must be at least 5 characters! ")
        .max(25, "Your name must be under 25 characters! ")
        .required("Your must fill in this section"),
      email: Yup.string()
        .email("Invalid Email")
        .required("Your must fill in this section"),
      password: Yup.string()
        .min(8, " Your PassWord must be at least 8 characters! ")
        .required("Your must fill in this section"),
      ConfirmPassWord: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Your must fill in this section"),
        Phone: Yup.string()
        .min(10, "Your Phone Number must be at least 10 digits!")
        .required("You must fill in this section"),
        
    }),
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        // Handle form submission success
        handleShowAlert();
        navigate("/SignIn");
      } else {
        // Handle form validation errors if needed
        window.alert("Please fill in the correct information to Login!");
      }
    },
  });
  
  return (
    <div className="body">    
    <div>
    <Navbar/>
    <HeroSection
                name="hero-contact"
                img="./image/contact.jpg"
                title="Register"
            />
    </div>
    

    <div>
      
    </div>
      <div className="container">
      <div className="row justify-content-around  my-3 bg-light p-3">
      <div className="col-md-6 col-sm-6 col-xl-6">
        <img src="./image/up1.jpg" alt="" />
      </div>
        <div className="col-sm-6 col-xl-6 col-xl-6">
          <h1>Register</h1>

          <img
            src="./image/icon.png"
            alt=""
            className="rotating-fan rounded-circle"
          />
        
          <form onSubmit={formik.handleSubmit} className="signup-form">
            <div className="mb-3 mt-3">
              <label className="form-group text-uppercase  form-label padding"></label>
              <input
                type="text"
                name="name"
                id=""
                onBlur={formik.handleBlur}

                placeholder="Enter Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="form-control small-input"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="error-message">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label className="form-group text-uppercase  form-label"></label>
              <input
                type="text"
                name="email"
                id=""
                onBlur={formik.handleBlur}

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
                onBlur={formik.handleBlur}

                placeholder="Enter Your PassWord"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="error-message">{formik.errors.password}</div>
              ) : null} 
            </div>
            <div>
              <label className="form-group text-uppercase  form-label"></label>
              <input
                type="password"
                name="ConfirmPassWord"
                id=""
                onBlur={formik.handleBlur}

                placeholder=" Enter Your ConFirmPassWord"
                value={formik.values.ConfirmPassWord}
                onChange={formik.handleChange}
                className="form-control"
              />
              {formik.errors.ConfirmPassWord &&
              formik.touched.ConfirmPassWord ? (
                <div className="error-message">
                  {formik.errors.ConfirmPassWord}
                </div>
              ) : null}
            </div>
            <div>
  <label className="form-group text-uppercase form-label"></label>
  <input
    type="text"
    name="Phone"
    id=""
    onBlur={formik.handleBlur}

    placeholder="Enter Your Phone Number"
    value={formik.values.Phone}
    onChange={formik.handleChange}
    className="form-control"
  />
  {formik.errors.Phone && formik.touched.Phone ? (
    <div className="error-message">{formik.errors.Phone}</div>
  ) : null}
</div>

        <div>
        <input type="submit" value="Register"
              // Call handleSignUp when the button is clicked
           
            class="btn btn-primary mt-3" 
              disabled={
      Object.keys(formik.errors).length > 0 ||
      !formik.isValid ||
      !formik.touched.name ||
      !formik.touched.email ||
      !formik.touched.password ||
      !formik.touched.ConfirmPassWord ||
      !formik.touched.Phone 


    }
            />
        </div>
          </form>
        
          <p>
            Already have an account? <Link to="/SignIn">Log In</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>

    </div>
    
  );
}

export default SignUp;
