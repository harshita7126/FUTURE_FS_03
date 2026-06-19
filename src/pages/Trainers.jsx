import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import TrainerCard from '../components/TrainerCard/TrainerCard';
import { trainers } from '../data/trainers';

export default function Trainers() {
  useEffect(() => {
    document.title = "Expert Coaches & Trainers | FitForge";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Meet the expert coaches and trainers at FitForge Bengaluru. Our certified instructors specialize in athletic performance, strength training, HIIT, and corrective exercise.");
    }
  }, []);

  const [activeSpecialty, setActiveSpecialty] = useState('All');

  const categories = ['All', 'Strength & Rehab', 'HIIT & Cardio', 'Yoga & Nutrition'];

  const getFilteredTrainers = () => {
    if (activeSpecialty === 'All') return trainers;
    if (activeSpecialty === 'Strength & Rehab') {
      return trainers.filter(t => ['Marcus Vance', 'Michael Chang'].includes(t.name));
    }
    if (activeSpecialty === 'HIIT & Cardio') {
      return trainers.filter(t => ['Jaxson Briggs', 'David Kim'].includes(t.name));
    }
    if (activeSpecialty === 'Yoga & Nutrition') {
      return trainers.filter(t => ['Elena Rostova', 'Sarah Jenkins'].includes(t.name));
    }
    return trainers;
  };

  const displayTrainers = getFilteredTrainers();

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
          <span className="section-subtitle">Expert Coaches</span>
          <h1 className="section-title">Forge Mentorship</h1>
          <p className="section-description">
            Our certified coaches are sports scientists and medical exercise specialists who focus on joint safety, progression, and goal-achievement.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSpecialty(cat)}
              className={`btn ${activeSpecialty === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 24px', fontSize: '0.9rem', borderRadius: '20px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <motion.div 
          className="grid-container grid-3"
          layout
          style={{ position: 'relative' }}
        >
          <AnimatePresence mode="popLayout">
            {displayTrainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TrainerCard trainer={trainer} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Consultation Callout */}
        <div className="glassmorphic-card" style={{ marginTop: '80px', padding: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', maxWidth: '600px' }}>
            <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Not sure who matches your profile?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                Schedule a complimentary 20-minute physical screening session. We will examine your posture, goals, and matching coach recommendations.
              </p>
            </div>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ flexShrink: 0, padding: '10px 24px', fontSize: '0.9rem' }}>
            Book Consultation
          </a>
        </div>

      </div>
    </motion.div>
  );
}
