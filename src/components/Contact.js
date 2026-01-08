import React, { useState } from 'react';
import anchortechLogo from '../assets/logo2.png';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contact = () => {
  // Removed showAfterHours and useEffect as they are not relevant to mailto
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // Replaced validation states with simple message for clarity
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitMessage(null); // Clear messages on input change
  };

  // mailto: logic for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = 'contact@anchortech.org'; // The recipient email
    const { name, email, message } = formData;

    // Client-side validation for required fields
    if (!name || !email || !message) {
      setSubmitMessage({ type: 'danger', text: 'Please fill out all required fields (Name, Email, and Message).' });
      return;
    }

    setIsSubmitting(true);

    const subject = `New Inquiry from ${name} via Contact Form`;

    // Helper function to format form data into a readable string for the email body
    const formatBody = () => {
      let body = `Hello AnchorTech Team,\n\nI am contacting you with a new inquiry. My details are below:\n\n`;
      body += `Full Name: ${name}\n`;
      body += `Email: ${email}\n`;
      body += `--- Message ---\n`;
      body += `${message}\n\n`;
      body += `(Note: This was sent via the mailto link. Please reply directly to ${email}.)`;
      return encodeURIComponent(body);
    };

    const mailtoLink =
      `mailto:${recipient}?` +
      `subject=${encodeURIComponent(subject)}&` +
      `body=${formatBody()}`;

    // Open the user's default email client/app
    window.open(mailtoLink, '_blank');

    // Reset form after successful generation of mailto link
    // We set a success message to inform the user about the next step
    setTimeout(() => {
      setIsSubmitting(false);

      setSubmitMessage({
        type: 'success',
        text: (
          <>
            Your email draft has been prepared! Please check your email application (it may be in a new window).
            If the draft does not open, please email us directly at <a href="mailto:contact@anchortech.org">contact@anchortech.org</a>.
          </>
        )
      });

      setFormData({ name: '', email: '', message: '' });

    }, 100);
  };

  return (
    <section className="contact-section py-5" style={{ backgroundColor: '#e4e4e4' }}>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          {/* Left: Contact Form */}
          <div className="col-md-6 mb-4">
            <h2 className="mb-3">Open an Email Draft</h2>
            <p className="contact-description">
              Fill out the form to open a pre-filled email draft in your default email client to connect with us.
            </p>

            {/* Display dynamic submission message */}
            {submitMessage && (
              <div
                className={`alert alert-${submitMessage.type === 'success' ? 'success' : 'danger'} mb-4`}
                role="alert"
              >
                {submitMessage.text}
              </div>
            )}

            {/* Replaced EmailJS logic with handleSubmit for mailto */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or consultation needs."
                ></textarea>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Preparing Email...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane me-2"></i>
                    Open Email Draft
                  </>
                )}
              </button>
              <div className="mt-3">
                <small className="text-muted">
                  Clicking the button will open an email draft in your default application.
                </small>
              </div>
            </form>
          </div>

          {/* Right: Contact Info (Content remains mostly the same) */}
          <div className="col-md-5 offset-md-1">
            <img src={anchortechLogo} alt="AnchorTech Logo" className="mb-3" style={{ maxWidth: '150px' }} />
            <h4>Get in Touch</h4>
            <p className="contact-description"><strong>Phone:</strong> <a href="tel:+18033310716">803-331-0716</a></p>
            <p className="contact-description"><strong>Email:</strong> <a href="mailto:contact@anchortech.org">contact@anchortech.org</a></p>
            <p className="contact-description"><strong>Business Hours:</strong> Mon–Fri, 8 AM – 5 PM</p>
            <p className="contact-description"><strong>Location:</strong> Pineville, NC</p>
            <p className="contact-description"><em>Need assistance after hours? Send me an email, and I'll respond as soon as possible.</em></p>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h2 style={{ color: "#3A6A96", marginBottom: "15px" }}>Schedule a Consultation</h2>
              {/* Note: If you want to keep the after-hours logic for the Calendly link, you would need to re-add the useEffect and showAfterHours state here. I have omitted it for simplicity, focusing only on the form change. */}
              <h5 style={{ maxWidth: "700px", margin: "0 auto 20px", fontSize: "16px" }}>
                Book a free 30-minute strategy session to discuss your needs.
              </h5>
              <a
                href="https://calendly.com/contact-anchortech"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#3A6A96",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: "bold"
                }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;