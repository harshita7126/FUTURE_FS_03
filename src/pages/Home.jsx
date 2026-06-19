import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Zap, ArrowRight, Activity } from 'lucide-react';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import ProgramCard from '../components/ProgramCard/ProgramCard';
import TrainerCard from '../components/TrainerCard/TrainerCard';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

// Import datasets
import { programs } from '../data/programs';
import { trainers } from '../data/trainers';

export default function Home() {
  useEffect(() => {
    document.title = "FitForge | Transform Your Body. Transform Your Life.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "FitForge is Bengaluru's premier commercial-grade fitness platform. We offer strength training, cardio conditioning, yoga, nutrition coaching, and elite personal training.");
    }
  }, []);

  const featuredPrograms = programs.slice(0, 3);
  const featuredTrainers = trainers.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section */}
      <Stats />

      {/* 3. Why Choose Us Section */}
      <section className="why-choose-us-section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Core Values</span>
            <h2 className="section-title">Why Train With FitForge?</h2>
            <p className="section-description">
              We provide an engineered training ecosystem built for those who refuse to settle for average.
            </p>
          </div>

          <motion.div 
            className="grid-container grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="why-card glassmorphic-card" variants={itemVariants} style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
                <Shield size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>State-Of-The-Art Rig</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Equipped with elite-level Eleiko barbell platforms, Rogue rigs, and premium bio-mechanical selectorized machines.
              </p>
            </motion.div>

            <motion.div className="why-card glassmorphic-card" variants={itemVariants} style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Next-Gen Diagnostics</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Assess your skeletal balance and metabolic thresholds with our integrated 3D body scanners and VO2 diagnostics.
              </p>
            </motion.div>

            <motion.div className="why-card glassmorphic-card" variants={itemVariants} style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
                <Award size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Expert Sports Scientists</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Our trainers hold advanced degrees in exercise physiology, sports nutrition, and physical rehabilitation.
              </p>
            </motion.div>

            <motion.div className="why-card glassmorphic-card" variants={itemVariants} style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(0, 209, 255, 0.08)', padding: '16px', borderRadius: '50%', color: 'var(--text-accent)' }}>
                <Zap size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>High-Performance Vibe</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Immerse yourself in a focused environment devoid of typical gym distractions. We are here to train.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Programs */}
      <section className="featured-programs-section" style={{ background: 'var(--bg-primary)', position: 'relative', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', paddingBottom: '40px' }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Curated Offerings</span>
            <h2 className="section-title">Featured Programs</h2>
            <p className="section-description">
              Engineered regimens tailored to bring out your absolute genetic potential.
            </p>
          </div>

          <motion.div 
            className="grid-container grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredPrograms.map((program) => (
              <motion.div key={program.id} variants={itemVariants}>
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/programs" className="btn btn-secondary" style={{ padding: '12px 30px' }}>
              View All 8 Programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Trainers */}
      <section className="featured-trainers-section" style={{ background: 'var(--bg-primary)', paddingBottom: '40px' }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">Elite Mentorship</span>
            <h2 className="section-title">Meet Our Champions</h2>
            <p className="section-description">
              Trainers committed to ensuring safety, correct movement biology, and consistent progress.
            </p>
          </div>

          <motion.div 
            className="grid-container grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredTrainers.map((trainer) => (
              <motion.div key={trainer.id} variants={itemVariants}>
                <TrainerCard trainer={trainer} />
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/trainers" className="btn btn-secondary" style={{ padding: '12px 30px' }}>
              Meet The Whole Crew
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. FAQ Accordion */}
      <FAQ />

      {/* 8. CTA Banner */}
      <section className="cta-banner-section" style={{ background: 'var(--bg-primary)', padding: '100px 24px', position: 'relative' }}>
        <div className="cta-glow-backdrop" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(0, 82, 255, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 1 }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 2, padding: 0 }}>
          <div className="glassmorphic-card" style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: 'var(--gradient-primary)', padding: '16px', borderRadius: '50%', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-neon)' }}>
              <Activity size={32} className="badge-icon" />
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>Ready to Forge Your Strength?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Join FitForge today and gain access to premium coaching, customized nutrition programming, and Bengaluru's best equipment.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: '8px' }}>
              <Link to="/membership" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                Explore Membership Tiers
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                Contact Front Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
