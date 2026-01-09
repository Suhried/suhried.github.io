import { useState, useEffect } from 'react';

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const terminalLines = [
    '> booting system...',
    '> loading portfolio modules',
    '> initializing UI components',
    '> ready',
  ];

  useEffect(() => {
    let currentLine = 0;
    // Faster on mobile - 50% faster than original, desktop keeps 30% faster
    const isMobile = window.innerWidth < 768;
    const lineInterval = isMobile ? 300 : 420; // Mobile: 50% faster, Desktop: 30% faster
    const completionDelay = isMobile ? 250 : 350;
    const finalTimeout = isMobile ? 400 : 560;
    const totalDuration = terminalLines.length * lineInterval + completionDelay;
    const progressInterval = 100; // Update progress every 100ms
    let progress = 0;
    
    const progressTimer = setInterval(() => {
      progress += (progressInterval / totalDuration) * 100;
      if (progress < 100) {
        setLoadingProgress(progress);
      } else {
        setLoadingProgress(100);
        clearInterval(progressTimer);
      }
    }, progressInterval);
    
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setLines((prev) => [...prev, terminalLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, finalTimeout);
        }, completionDelay);
      }
    }, lineInterval);

    return () => {
      clearInterval(interval);
      clearInterval(progressTimer);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-800 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full px-4 md:px-8">
        {/* Terminal Window */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 shadow-2xl overflow-hidden w-full max-w-[450px] h-[350px] md:h-[400px] mx-auto flex flex-col">
          {/* Terminal Header */}
          <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-500 text-sm font-mono">terminal</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm flex-1 overflow-y-auto">
            <div className="text-gray-400 mb-4">
              {lines.map((line, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <span className="text-[#F36A2F] mr-2">$</span>
                  <span className="text-green-400">{line}</span>
                </div>
              ))}
              {!isComplete && showCursor && (
                <div className="flex items-center">
                  <span className="text-[#F36A2F] mr-2">$</span>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
                </div>
              )}
            </div>
            
            {/* Loading Indicator - Filling Pipe */}
            {!isComplete && (
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-500 text-xs">Loading</span>
                  <span className="text-gray-600 text-xs">[{Math.round(loadingProgress)}%]</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-[#F36A2F] to-[#C8FF3D] transition-all duration-100 ease-linear rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
