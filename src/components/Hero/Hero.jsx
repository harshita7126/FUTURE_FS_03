import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-glow" />
      <div className="hero-container">
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="hero-badge-wrapper" variants={itemVariants}>
            <span className="hero-badge">
              <Dumbbell size={14} className="badge-icon" />
              BENGALURU'S PREMIER FITNESS HUB
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            Transform Your Body.<br />
            <span className="gradient-text">Transform Your Life.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hero-description" variants={itemVariants}>
            FitForge is a premium fitness facility designed to build strength, improve biomechanics, and elevate your performance. Train with world-class coaches and experience next-generation gym floors.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta-group" variants={itemVariants}>
            <Link to="/membership" className="btn btn-primary hero-btn">
              Start Free Trial
              <ArrowRight size={18} />
            </Link>
            <Link to="/programs" className="btn btn-secondary hero-btn">
              Explore Programs
            </Link>
          </motion.div>

          {/* Core Highlights */}
          <motion.div className="hero-highlights" variants={itemVariants}>
            <div className="highlight-item">
              <span className="highlight-dot" />
              <span>Personalized Coaching</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-dot" />
              <span>Bio-Metric Assessment</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-dot" />
              <span>Elite Level Rigging</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Gym Mockup/Illustration */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="image-glass-frame">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium Gym Training Floor" 
              className="hero-image"
            />
            <div className="image-overlay-card glassmorphic-card">
              <div className="overlay-badge">LIVE SESSION</div>
              <div className="overlay-info">
                <h4>Strength Lab</h4>
                <p>Mon - Fri at 6:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
