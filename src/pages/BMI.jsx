import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Heart, Flame } from 'lucide-react';
import BMICalculator from '../components/BMICalculator/BMICalculator';

export default function BMI() {
  useEffect(() => {
    document.title = "BMI Health Calculator | FitForge";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Use the FitForge body mass index (BMI) health calculator to estimate body fat relative to height and weight. Get expert training and nutrition recommendations.");
    }
  }, []);
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ paddingTop: 'var(--navbar-height)', minHeight: '100vh', background: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        
        {/* Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-subtitle">Bio-Metrics</span>
          <h1 className="section-title">BMI Health Calculator</h1>
          <p className="section-description">
            Your Body Mass Index (BMI) is a reliable indicator of body fatness for most people. Use this calculator to identify your category and access tailored advice.
          </p>
        </motion.div>

        {/* Embedded Calculator */}
        <motion.div variants={itemVariants} style={{ marginBottom: '80px' }}>
          <BMICalculator />
        </motion.div>

        {/* Informational Cards */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Understanding Your Metrics</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
            A quick reference guide to BMI ranges and their physiological implications.
          </p>
        </div>

        <motion.div 
          className="grid-container grid-3"
          variants={pageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="glassmorphic-card" variants={itemVariants} style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '10px', borderRadius: '8px', color: 'var(--text-accent)', display: 'flex', alignItems: 'center' }}>
                <Heart size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Ideal Weight Range</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              A BMI between <strong>18.5 and 24.9</strong> indicates a healthy weight relative to height. Staying within this zone reduces cardiovascular risks, optimizes metabolic health, and enhances mobility.
            </p>
          </motion.div>

          <motion.div className="glassmorphic-card" variants={itemVariants} style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '10px', borderRadius: '8px', color: 'var(--text-accent)', display: 'flex', alignItems: 'center' }}>
                <Flame size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Active Body Recomposition</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              BMI does not directly differentiate between lean muscle mass and fat mass. Highly muscular individuals (like powerlifters or bodybuilders) may score high on BMI without being fat.
            </p>
          </motion.div>

          <motion.div className="glassmorphic-card" variants={itemVariants} style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '10px', borderRadius: '8px', color: 'var(--text-accent)', display: 'flex', alignItems: 'center' }}>
                <ShieldAlert size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Why BMI Matters</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              While simple, BMI is an excellent, free baseline screening indicator. If your results fall outside the normal range, we recommend consulting our dietitians to schedule a 3D Scan assessment.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
