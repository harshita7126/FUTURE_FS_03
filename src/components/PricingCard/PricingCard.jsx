import { Check, ShieldCheck } from 'lucide-react';
import './PricingCard.css';

export default function PricingCard({ plan, onSelectPlan }) {
  const { name, price, period, description, popular, features, ctaText } = plan;

  return (
    <div className={`pricing-card glassmorphic-card ${popular ? 'popular' : ''}`}>
      {popular && (
        <div className="popular-badge">
          <ShieldCheck size={14} />
          MOST POPULAR
        </div>
      )}

      <div className="pricing-card-header">
        <h3 className="plan-name">{name}</h3>
        <p className="plan-description">{description}</p>
        <div className="plan-price-row">
          <span className="price-currency">₹</span>
          <span className="price-amount">{price.toLocaleString('en-IN')}</span>
          <span className="price-period">/{period}</span>
        </div>
      </div>

      <div className="pricing-card-body">
        <ul className="plan-features-list">
          {features.map((feature, index) => (
            <li key={index} className="plan-feature-item">
              <Check size={16} className="feature-check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`btn pricing-cta-btn ${popular ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => onSelectPlan && onSelectPlan(name)}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
