import { useNavigate , Link } from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import Footer from "../Components/Footer";
  import HeroSection from "../Components/HeroSection";
  import Navbar from "../Components/Navbar";
  import Swal from "sweetalert2";


  function SignIn() {

    const navigate = useNavigate();

  const handleShowAlert = () => {
    Swal.fire({
      title: "Thank You",
      text: "Logged in successfully! Welcome to the website!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section"),
      password: Yup.string()
        .min(8, " Your PassWord must be at least 8 characters! ")
        .required("You must fill in this section"),
    }),
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        // Handle form submission success
        handleShowAlert();
        navigate("/");
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
          <img src="./image/in1.jpg" alt="" />
        </div>
          <div className="col-sm-6 col-xl-6 col-xl-6">
            <h1>Log In</h1>

            <img
              src="./image/icon.png"
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
          <input type="submit" value="Register"
                // Call handleSignUp when the button is clicked
              class="btn btn-primary mt-3" 
              disabled={
      Object.keys(formik.errors).length > 0 ||
      !formik.isValid ||
  
      !formik.touched.email ||
      !formik.touched.password 

    }
              />
          </div>
            </form>
          
            <p>
  Don't have an account? <Link to="/signup">Register</Link>
</p>
          </div>
        </div>
      </div>
      <Footer/>

      </div>
      
    );
  }

  export default SignIn;