import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalHero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    '> INITIALIZING PORTFOLIO SYSTEM...',
    '> LOADING CORE MODULES...................[OK]',
    '> MOUNTING COMPONENTS:',
    '  ├─ ABOUT.MODULE........................[OK]',
    '  ├─ PROJECTS.MODULE.....................[OK]',
    '  ├─ EXPERIENCE.MODULE...................[OK]',
    '  └─ SKILLS.MODULE.......................[OK]',
    '> ESTABLISHING CONNECTION',
    '> SYSTEM READY',
    "> WELCOME TO SUHRIED DATTA'S WORKSPACE_",
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timeout = setTimeout(
        () => {
          setCurrentLine((prev) => prev + 1);
        },
        currentLine === 0 ? 500 : currentLine === 2 ? 300 : 400
      );

      return () => clearTimeout(timeout);
    } else {
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
      }, 1500);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentLine, terminalLines.length]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-accent/20 animate-scan-line"></div>
          </div>

          <div className="w-full max-w-3xl mx-4">
            <div className="bg-gray-900/50 rounded-lg border border-accent/30 shadow-2xl overflow-hidden">
              <div className="bg-gray-800/80 px-4 py-3 flex items-center gap-2 border-b border-accent/20">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-400 font-mono">
                  terminal — portfolio-init
                </span>
              </div>

              <div className="p-8 font-mono text-accent space-y-2">
                {terminalLines.slice(0, currentLine).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm md:text-base leading-relaxed"
                  >
                    {line}
                  </motion.div>
                ))}
                {currentLine < terminalLines.length && (
                  <div className="flex items-center">
                    <span className="text-sm md:text-base">
                      {terminalLines[currentLine]}
                    </span>
                    {showCursor && (
                      <span className="ml-1 text-accent">█</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalHero;