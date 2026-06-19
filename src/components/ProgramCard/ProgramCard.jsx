import { Clock, BarChart, Check, ArrowRight } from 'lucide-react';
import './ProgramCard.css';

export default function ProgramCard({ program, onCtaClick }) {
  const { title, description, duration, difficulty, price, benefits, image, ctaText } = program;

  return (
    <div className="program-card glassmorphic-card">
      <div className="program-image-wrapper">
        <img src={image} alt={title} className="program-img" />
        <div className="program-price-tag">
          <span className="price-currency">₹</span>
          <span className="price-value">{price}</span>
          <span className="price-period">/mo</span>
        </div>
      </div>

      <div className="program-card-body">
        <h3 className="program-card-title">{title}</h3>
        <p className="program-card-description">{description}</p>

        {/* Program Specifications */}
        <div className="program-specs">
          <div className="spec-item">
            <Clock size={16} className="spec-icon" />
            <span>{duration}</span>
          </div>
          <div className="spec-item">
            <BarChart size={16} className="spec-icon" />
            <span>{difficulty}</span>
          </div>
        </div>

        {/* Benefits Checklist */}
        <ul className="program-benefits">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              <Check size={14} className="benefit-icon" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Card CTA */}
        <button className="btn btn-secondary program-card-btn" onClick={() => onCtaClick && onCtaClick(title)}>
          {ctaText}
          <ArrowRight size={16} className="btn-arrow" />
        </button>
      </div>
    </div>
  );
}
