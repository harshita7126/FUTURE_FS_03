import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Send } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from '../SocialIcons';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Information */}
        <div className="footer-column brand-column">
          <Link to="/" className="footer-logo">
            <Dumbbell className="logo-icon" />
            <span>Fit<span className="gradient-text font-bold">Forge</span></span>
          </Link>
          <p className="brand-description">
            Build your ultimate body, master your biomechanics, and join a high-performance community. Our state-of-the-art facility is engineered to forge champions.
          </p>
          <div className="social-icons">
            <a href="https://instagram.com/fitforge" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="https://twitter.com/fitforge" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <TwitterIcon size={20} />
            </a>
            <a href="https://linkedin.com/company/fitforge" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column links-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Training Programs</Link></li>
            <li><Link to="/trainers">Expert Trainers</Link></li>
            <li><Link to="/membership">Membership Tiers</Link></li>
            <li><Link to="/bmi">BMI Calculator</Link></li>
            <li><Link to="/contact">Contact & Location</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column contact-column">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="contact-details-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>102, High Performance Arena, Sector 4, HSR Layout, Bengaluru, Karnataka 560102</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>membership@fitforge.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-column newsletter-column">
          <h3 className="footer-title">Newsletter</h3>
          <p className="newsletter-text">
            Subscribe to receive expert fitness tips, workout guides, and exclusive membership offers.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="form-input newsletter-input"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter subscription"
            />
            <button type="submit" className="btn btn-primary newsletter-btn" aria-label="Subscribe">
              <Send size={18} />
            </button>
          </form>
          {subscribed && (
            <p className="newsletter-success">
              Successfully subscribed! Check your inbox soon.
            </p>
          )}
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} FitForge. All rights reserved. Designed for premium performance.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
