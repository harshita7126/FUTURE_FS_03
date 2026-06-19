import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Award } from 'lucide-react';
import PricingCard from '../components/PricingCard/PricingCard';
import { memberships, featureMatrix } from '../data/memberships';
import './Membership.css';

export default function Membership() {
  useEffect(() => {
    document.title = "Membership Plans & Pricing | FitForge";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Compare membership tiers (Basic, Pro, Elite) at FitForge Bengaluru. Enjoy flexible monthly rates, state-of-the-art facilities, steam/sauna, and personal coaching.");
    }
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedPlan(null);
    }, 6000);
  };

  const renderTableCell = (value) => {
    if (value === true) return <Check size={18} style={{ color: '#4CAF50', margin: '0 auto' }} />;
    if (value === false) return <X size={18} style={{ color: '#FF5722', margin: '0 auto' }} />;
    return <span style={{ fontSize: '0.85rem' }}>{value}</span>;
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
          <span className="section-subtitle">Fair & Flexible</span>
          <h1 className="section-title">Membership Pricing</h1>
          <p className="section-description">
            Choose a tier that aligns with your intensity. No setup fees, no lock-in contracts, cancel anytime.
          </p>
        </div>

        {/* Modal Success Flag */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="plan-success-toast glassmorphic-card"
          >
            <Award size={20} className="toast-icon" />
            <span>Excellent choice! You've selected the <strong>{selectedPlan}</strong>. Our front desk will contact you to arrange your keycard.</span>
          </motion.div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid-container grid-3" style={{ marginBottom: '80px', alignItems: 'stretch' }}>
          {memberships.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>

        {/* Feature Comparison Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Compare Plan Features</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
            A granular breakdown of privileges across all three plans.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="comparison-table-wrapper glassmorphic-card">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Privileges & Equipment</th>
                <th>Basic Plan</th>
                <th>Pro Plan</th>
                <th>Elite Plan</th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.categories.map((category, catIndex) => (
                <Fragment key={catIndex}>
                  <tr className="category-header-row">
                    <td colSpan="4">{category.name}</td>
                  </tr>
                  {category.features.map((feature, featIndex) => (
                    <tr key={featIndex}>
                      <td className="feature-name-col">{feature.name}</td>
                      <td>{renderTableCell(feature.basic)}</td>
                      <td>{renderTableCell(feature.pro)}</td>
                      <td>{renderTableCell(feature.elite)}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </motion.div>
  );
}
