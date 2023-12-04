import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import ContactMap from "./ContactMap";

function Contact2() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
    
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Name must be at least 5 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid Email")
        .required("Email is required"),
      subject: Yup.string()
        .min(5, "Subject must be at least 5 characters")
        .required("Subject is required"),
    
    }),

    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        // Handle form submission success
        handleShowAlert();
        navigate("/");
      } else {
        // Handle form validation errors if needed
      }
    },
  });

  const handleShowAlert = () => {
    Swal.fire({
      title: "Thank You",
      text: "The form was submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <Navbar />
      <HeroSection
        name="hero-contact"
        img="./image/contact.jpg"
        title="CONTACT"
      />

      <div>
        <div className="container">
          <div className="row justify-content-around class">
            <div className="col-md-6 col-xl-6 col-sm-6 my-3 bg-light p-3 ">
              <img src="./image/signup.png" alt="" />
            </div>
            <div className="col-md-6 col-xl-6 col-sm-6 my-3 bg-light p-3 ">
              
              

              <form onSubmit={formik.handleSubmit} className="signup-form">
  <div>
    <label className="form-group text-uppercase  form-label"></label>
    <input
      type="text"
      name="name"
      id=""
      placeholder="Your name"
      value={formik.values.name}
      onChange={formik.handleChange}
      className="form-control"
    />
    {formik.errors.name && formik.touched.name ? (
      <div className="error-message">{formik.errors.name}</div>
    ) : null}
  </div>
  <div>
    <label className="form-group text-uppercase  form-label"></label>
    <input
      type="email"
      name="email"
      id=""
      placeholder="Your email"
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
      type="text"
      name="subject"
      id=""
      placeholder="Your query"
      value={formik.values.subject}
      onChange={formik.handleChange}
      className="form-control"
    />
    {formik.errors.subject && formik.touched.subject ? (
      <div className="error-message">{formik.errors.subject}</div>
    ) : null}
  </div>
  

  <input
    type="submit"
    value="Send Message"
    className="btn btn-success mt-3"
    disabled={Object.keys(formik.errors).length > 0}
  />
</form>
              {/* Link liên kết để đăng nhập  */}
              <p>
              <Link to='/Contact'  style={{color: "red"}}>Back to contact page? </Link>
              </p>
            </div>
            </div>
            <div style={{width: "100%",height:"100%"}}>
              <ContactMap />
            </div>
           </div>
          </div>
       
     

      <Footer />
    </div>
  );
}
export default Contact2;
