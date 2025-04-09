import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, XCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex items-center">
      <div className="relative flex items-center space-x-2">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white text-blue-600 shadow-md z-50 border border-blue-200"
        >
          {isOpen ? <XCircle size={20} /> : <Stethoscope size={20} />}
        </button>

        {/* Always visible label */}
        {!isOpen && (
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded shadow-md transition duration-200 ease-in-out">
            MORE FEATURES
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-50 to-white shadow-lg z-40 flex flex-col p-6 space-y-3"
          >
            {[
              { label: 'SMART SYMPTOM CHECKER', to: '/audio' },
              { label: 'VIDEO CALL', to: '/new' },
              { label: 'MEDICATION REMINDER', to: '/med-reminder' },
              { label: 'CALCULATOR', to: '/calculator' },
              { label: 'DAILY HEALTH JOURNAL', to: '/health-journal' },
              { label: 'POSTURE CHECKER', to: '/posture-checker' },
              { label: 'DAILY EXERCISE', to: '/daily-exercise' },
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="text-base text-blue-700 font-medium px-4 py-2 rounded hover:bg-blue-100 transition duration-200"
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;











