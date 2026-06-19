import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Layout Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import BMI from './pages/BMI';
import Contact from './pages/Contact';

// Styles
import './styles/global.css';

// Scroll Restoration Helper Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Route page transitions animation settings
  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Header navbar */}
      <Navbar />

      {/* Main page content wrapper */}
      <main className="main-content" style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/programs" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <Programs />
                </motion.div>
              } 
            />
            <Route 
              path="/trainers" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <Trainers />
                </motion.div>
              } 
            />
            <Route 
              path="/membership" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <Membership />
                </motion.div>
              } 
            />
            <Route 
              path="/bmi" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <BMI />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
                  <Contact />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer information */}
      <Footer />

      {/* Sticky Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to Top"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-neon)',
              zIndex: 999
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
