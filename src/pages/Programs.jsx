import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import ProgramCard from '../components/ProgramCard/ProgramCard';
import { programs } from '../data/programs';

export default function Programs() {
  useEffect(() => {
    document.title = "Training Programs | FitForge";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore the 8 core training programs at FitForge Bengaluru, including Strength Training, Cardio Conditioning, CrossFit, Yoga, and Nutrition Coaching.");
    }
  }, []);

  const [activeTab, setActiveTab] = useState('All');

  // Categories assignment
  const categories = ['All', 'Strength', 'Cardio', 'Wellness'];

  const getCategorizedPrograms = () => {
    if (activeTab === 'All') return programs;
    if (activeTab === 'Strength') {
      return programs.filter(p => ['Strength Training', 'CrossFit', 'Functional Fitness'].includes(p.title));
    }
    if (activeTab === 'Cardio') {
      return programs.filter(p => ['Cardio Conditioning', 'Weight Loss'].includes(p.title));
    }
    if (activeTab === 'Wellness') {
      return programs.filter(p => ['Yoga & Flexibility', 'Personal Training', 'Nutrition Coaching'].includes(p.title));
    }
    return programs;
  };

  const filteredPrograms = getCategorizedPrograms();

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
          <span className="section-subtitle">Our Regimens</span>
          <h1 className="section-title">FitForge Training Programs</h1>
          <p className="section-description">
            Choose from our range of scientifically engineered fitness classes. From raw powerlifting to posture restoration, we've got you covered.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`btn ${activeTab === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 24px', fontSize: '0.9rem', borderRadius: '20px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <motion.div 
          className="grid-container grid-3"
          layout
          style={{ position: 'relative' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Class Schedule Quick Banner */}
        <div className="glassmorphic-card" style={{ marginTop: '80px', padding: '40px', display: 'flex', flexDirection: 'column', mdDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
              <Calendar size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Need a weekly timetable?</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                We run over 45 structured slots per week. Drop by the facility to pick up your schedule sheet.
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
