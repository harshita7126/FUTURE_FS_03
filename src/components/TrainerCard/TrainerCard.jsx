import { Award, Briefcase, Target } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from '../SocialIcons';
import { motion } from 'framer-motion';
import './TrainerCard.css';

export default function TrainerCard({ trainer }) {
  const { name, role, experience, specialization, certifications, image, bio, socials } = trainer;

  const getHandle = (url, type) => {
    const handle = url.split('/').pop();
    if (type === 'linkedin') return `in/${handle}`;
    return `@${handle}`;
  };

  return (
    <motion.div 
      className="trainer-card glassmorphic-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="trainer-image-frame">
        <img src={image} alt={name} className="trainer-img" />
        <div className="trainer-overlay">
          <div className="trainer-socials-row">
            <button 
              type="button" 
              className="trainer-social-btn" 
              data-tooltip={getHandle(socials.instagram, 'instagram')} 
              aria-label={`Instagram handle: ${getHandle(socials.instagram, 'instagram')}`}
            >
              <InstagramIcon size={18} />
            </button>
            <button 
              type="button" 
              className="trainer-social-btn" 
              data-tooltip={getHandle(socials.twitter, 'twitter')} 
              aria-label={`Twitter handle: ${getHandle(socials.twitter, 'twitter')}`}
            >
              <TwitterIcon size={18} />
            </button>
            <button 
              type="button" 
              className="trainer-social-btn" 
              data-tooltip={getHandle(socials.linkedin, 'linkedin')} 
              aria-label={`LinkedIn handle: ${getHandle(socials.linkedin, 'linkedin')}`}
            >
              <LinkedinIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="trainer-info">
        <h3 className="trainer-name">{name}</h3>
        <span className="trainer-role gradient-text">{role}</span>
        
        <p className="trainer-bio">{bio}</p>

        <div className="trainer-details-list">
          <div className="trainer-detail-item">
            <Briefcase size={15} className="detail-icon" />
            <span><strong>Experience:</strong> {experience}</span>
          </div>

          <div className="trainer-detail-item">
            <Target size={15} className="detail-icon" />
            <span><strong>Specialty:</strong> {specialization}</span>
          </div>

          <div className="trainer-detail-item certifications-item">
            <Award size={15} className="detail-icon" />
            <div className="certs-list-wrapper">
              <strong>Certifications:</strong>
              <div className="certs-badges">
                {certifications.map((cert, index) => (
                  <span key={index} className="cert-badge">{cert.split(" ")[0]}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
