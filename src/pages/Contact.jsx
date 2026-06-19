import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import '../styles/Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact & Location | FitForge";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Get in touch with FitForge Bengaluru. Find our location in Sector 4 HSR Layout, check our operating hours, or write to our support desk for guest passes.");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when typing starts
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number (10-15 digits).';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Hide success message after 6 seconds
        setTimeout(() => setSubmitSuccess(false), 6000);
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh', background: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Reach Out</span>
          <h1 className="section-title">Contact FitForge</h1>
          <p className="section-description">
            Have questions about memberships, schedule booking, or guest passes? Get in touch with our team today.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Business details */}
          <div className="contact-info-column">
            <h2 className="info-section-title">Get In Touch</h2>
            <p className="info-section-description">
              Drop by the gym or send us a message. Our member support desk is ready to help you coordinate your fitness journey.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-card glassmorphic-card">
                <MapPin className="info-icon" />
                <div>
                  <h4>Facility Location</h4>
                  <p>102, High Performance Arena, Sector 4, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
              </div>

              <div className="contact-info-card glassmorphic-card">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-info-card glassmorphic-card">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Address</h4>
                  <p>membership@fitforge.com</p>
                </div>
              </div>

              <div className="contact-info-card glassmorphic-card">
                <Clock className="info-icon" />
                <div>
                  <h4>Operating Hours</h4>
                  <p><strong>Mon - Fri:</strong> 5:00 AM - 10:00 PM</p>
                  <p><strong>Saturday:</strong> 6:00 AM - 8:00 PM</p>
                  <p><strong>Sunday:</strong> 8:00 AM - 6:00 PM</p>
                  <p className="highlight-text">* Elite plans enjoy 24/7 keycard access.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div className="contact-form-column glassmorphic-card">
            <h2 className="info-section-title">Send a Message</h2>
            
            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="form-success-alert"
              >
                <CheckCircle size={20} className="alert-icon" />
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. A FitForge coordinator will contact you shortly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Rohan Sharma"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <div className="form-error" id="contact-name-error" role="alert">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="rohan.sharma@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <div className="form-error" id="contact-email-error" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  placeholder="+91 98765 43210"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
                {errors.phone && (
                  <div className="form-error" id="contact-phone-error" role="alert">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`form-input ${errors.message ? 'input-error' : ''}`}
                  placeholder="Tell us about your fitness goals or specific plan inquiries..."
                  style={{ resize: 'vertical' }}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <div className="form-error" id="contact-message-error" role="alert">
                    {errors.message}
                  </div>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn" 
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Map Location Section */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header" style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Find Us On The Map</h2>
          </div>
          <div className="google-map-frame-wrapper glassmorphic-card">
            <iframe 
              title="FitForge Gym Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.751688647895!2d77.63294371536412!3d12.923689490887642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148d56b00001%3A0x6b77242c13f64c6a!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1655655000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: 'var(--border-radius-md)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
