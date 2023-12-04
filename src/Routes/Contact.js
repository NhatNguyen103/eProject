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

function Contact() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
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
            message: Yup.string()
                .min(5, "Message must be at least 5 characters")
                .required("Message is required"),
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
                        <div className="col-xl-3 col-lg-3 col-sm-3 sm1">
                            <div className="icon-holder">
                                <i
                                    className="fas fa-map-marker-alt text-center location"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <span className="add">Address: </span>
                            250 Rt 59, Airmont NY 10901
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-3 sm1">
                            <div className="icon-holder">
                                <i
                                    className="fas fa-phone-alt text-center"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <span className="add">Phone: </span>+ 01 234 567 88
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-3 sm1">
                            <div className="icon-holder">
                                <i
                                    className="fa-regular fa-envelope text-center"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <span className="add">
                                Email:

                            </span>
                            info@fanofan.com
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-3 sm1">
                            <div className="icon-holder ">

                            </div>
                            <span className="add">Website: </span>fanofan.com
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-xl-6 col-sm-6 my-3 bg-light p-3 ">
                                    <img src="./image/signin.png" alt="" />
                                </div>
                                <div className="col-md-6 col-xl-6 col-sm-6 my-3 bg-light p-3 ">
                                    <h1 style={{ fontFamily: " " }}>Reach Out To Us</h1>


                                    <form onSubmit={formik.handleSubmit} className="signup-form">
                                        <div>
                                            <label className="form-group text-uppercase  form-label"></label>
                                            <input
                                                type="text"
                                                name="name"
                                                id=""
                                                placeholder="Name"
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
                                                placeholder="Email"
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
                                                placeholder="Subject"
                                                value={formik.values.subject}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                            />
                                            {formik.errors.subject && formik.touched.subject ? (
                                                <div className="error-message">{formik.errors.subject}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <label className="form-group text-uppercase  form-label"></label>
                                            <textarea
                                                name="message"
                                                id=""
                                                placeholder="Message"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                            />
                                            {formik.errors.message && formik.touched.message ? (
                                                <div className="error-message">{formik.errors.message}</div>
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
                                        <Link style={{ color: "red" }} to="/Contact2">Do you have a query? </Link>
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "100%", height: "100%" }}>
                                <ContactMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Contact;
