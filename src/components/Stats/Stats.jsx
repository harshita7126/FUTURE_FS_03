import { motion } from 'framer-motion';
import { gymStats } from '../../data/faq';
import './Stats.css';

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="stats-section">
      <motion.div 
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {gymStats.map((stat, index) => (
          <motion.div 
            key={index}
            className="stat-card glassmorphic-card"
            variants={cardVariants}
          >
            <h3 className="stat-value gradient-text">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
