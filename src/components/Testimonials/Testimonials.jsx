import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Success Stories</h2>
          <p className="section-description">
            Hear from our members who have forged their ideal physiques and transformed their lifestyle.
          </p>
        </div>

        <div className="testimonial-slider-wrapper">
          <button className="slider-control prev" onClick={handlePrev} aria-label="Previous Success Story">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-slide-container">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-slide glassmorphic-card"
              >
                <Quote size={50} className="testimonial-quote-icon" />
                
                {/* Rating stars */}
                <div className="star-rating-row">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} className="star-icon" fill="currentColor" />
                  ))}
                </div>

                <p className="testimonial-quote">"{current.quote}"</p>

                {/* Profile Details */}
                <div className="testimonial-profile">
                  <img src={current.image} alt={current.name} className="profile-img" />
                  <div className="profile-details">
                    <h4 className="profile-name">{current.name}</h4>
                    <span className="profile-job">{current.occupation}, {current.age} yrs</span>
                  </div>
                </div>

                {/* Transformation Details */}
                <div className="transformation-badge">
                  <div className="badge-stat">
                    <span className="badge-stat-title">Transformation:</span>
                    <span className="badge-stat-value">{current.achievement}</span>
                  </div>
                  <div className="badge-divider" />
                  <div className="badge-stat">
                    <span className="badge-stat-title">Duration:</span>
                    <span className="badge-stat-value">{current.duration}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          <button className="slider-control next" onClick={handleNext} aria-label="Next Success Story">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="slider-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
