// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
// import './contact.css'

// const Contact = () => {
//   return (
//     <section className="contact section">
//       <h2 className="section__title">
//         Get In <span>Touch</span>
//       </h2>

//       <div className="contact__container container grid">
//         <div className="contact__data">
//           <h3 className="contact__title">Don't be Shy</h3>
//           <p className="contact__description">
//             Feel free to get in touch with me. I am always open to discussing
//             new projects, creative ideas or opportunities to be part of your
//             visions.
//           </p>

//           <div className="contact__info">
//             <div className="info__item">
//               <FaEnvelopeOpen className="info__icon" />
//               <div>
//                 <span className="info__title">Mail Me</span>
//                 <h4 className="info__desc">elharchi2023@gmail.com</h4>
//               </div>
//             </div>

//             <div className="info__item">
//               <FaPhoneSquareAlt className="info__icon" />
//               <div>
//                 <span className="info__title">Call Me</span>
//                 <h4 className="info__desc">+212669326025</h4>
//               </div>
//             </div>
//           </div>

//           <div className="contact__socials">
//             <a href="https://facebook.com" className="contact__social-link">
//               <FaFacebookF />
//             </a>

//             <a href="https://facebook.com" className="contact__social-link">
//               <FaTwitter />
//             </a>

//             <a href="https://facebook.com" className="contact__social-link">
//               <FaLinkedin />
//             </a>

//             <a href="https://facebook.com" className="contact__social-link">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         <form className="contact__form">
//           <div className="form__input-group">
//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="form__control"
//               />
//             </div>
//             <div className="form__input-div">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="form__control"
//               />
//             </div>
//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 className="form__control"
//               />
//             </div>
//           </div>

//           <div className="form__input-div">
//             <textarea
//               placeholder="Your Message"
//               className="form__control textarea"
//             ></textarea>
//           </div>

//           <button className="button">
//             Send Message
//             <span className="button__icon contact__button-icon">
//               <FiSend />
//             </span>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaStackOverflow ,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://elharchi-mohamed-email-sender.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">elhachi2023@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+212669326025</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://meta.stackoverflow.com/users/27538564/mo-harchi" className="contact__social-link">
              <FaStackOverflow  />
            </a>

            <a
              href="https://github.com/mohamed-elharchi"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-elharchi-b14566264/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mo.harchi/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="button curs" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
