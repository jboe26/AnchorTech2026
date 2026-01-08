import React, { useState } from 'react';
import anchortechLogo from '../assets/logo2.png';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = 'contact@anchortech.org';
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setSubmitMessage({
        type: 'danger',
        text: 'Please fill out all required fields (Name, Email, and Message).'
      });
      return;
    }

    setIsSubmitting(true);

    const subject = `New Inquiry from ${name} via Contact Form`;

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

    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: (
          <>
            Your email draft has been prepared. Please check your email application (it may be in a new window or tab).
            If the draft does not open, you can email us directly at{' '}
            <a href="mailto:contact@anchortech.org">contact@anchortech.org</a>.
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
            <h2 className="mb-3">Start the Conversation</h2>
            <p className="contact-description">
              Every project starts with a simple conversation. Share a bit about your business, and we’ll explore how to
              anchor your tech to your identity—without the overwhelm.
            </p>

            {submitMessage && (
              <div
                className={`alert alert-${submitMessage.type === 'success' ? 'success' : 'danger'} mb-4`}
                role="alert"
              >
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="How should we address you?"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Where should we reply?"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, your challenges, or what kind of support you’re looking for."
                ></textarea>
              </div>

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
                  Clicking the button will open a pre-filled email draft in your default email application. No accounts, no portals—just a direct line.
                </small>
              </div>
            </form>
          </div>

          {/* Right: Contact Info / Founder Card */}
          <div className="col-md-5 offset-md-1">
            <div className="contact-card p-3 p-md-4 bg-white rounded shadow-sm">
              <div className="text-center mb-3">
                <img
                  src={anchortechLogo}
                  alt="AnchorTech Logo"
                  className="mb-2"
                  style={{ maxWidth: '140px' }}
                />
                <h4 className="mb-1" style={{ color: '#3A6A96' }}>Get In Touch</h4>
                <p className="contact-description mb-2">
                  Let’s anchor your business into its identity.
                </p>
              </div>

              <h5 className="mb-2">Contact Details</h5>
              <p className="contact-description mb-1">
                <strong>Phone:</strong> <a href="tel:+18033310716">803-331-0716</a>
              </p>
              <p className="contact-description mb-1">
                <strong>Email:</strong> <a href="mailto:contact@anchortech.org">contact@anchortech.org</a>
              </p>
              <p className="contact-description mb-1">
                <strong>Business Hours:</strong> Mon–Fri, 8 AM – 5 PM
              </p>
              <p className="contact-description mb-3">
                <strong>Location:</strong> Pineville, NC
              </p>
              <p className="contact-description">
                <em>
                  Need assistance after hours? Send an email or leave a message, and I’ll respond as soon as I’m able.
                </em>
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h2 style={{ color: '#3A6A96', marginBottom: '15px' }}>Schedule a Consultation</h2>
              <h5 style={{ maxWidth: '700px', margin: '0 auto 20px', fontSize: '16px' }}>
                Book a free 30-minute strategy session to talk through your needs and explore the right next step.
              </h5>
              <a
                href="https://calendly.com/contact-anchortech"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#3A6A96',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 'bold'
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
