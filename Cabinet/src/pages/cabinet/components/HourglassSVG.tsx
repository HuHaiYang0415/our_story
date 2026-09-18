import { motion } from 'motion/react';

export const HourglassSVG = ({ 
  daysLeft, 
  glowColor, 
  customSandColor 
}: { 
  daysLeft: number; 
  glowColor: string; 
  customSandColor?: string 
}) => {
  let topSandHeight = 0;
  let bottomSandHeight = 0;
  let isFlowing = false;
  let isPulsing = false;
  
  if (daysLeft > 30) {
    topSandHeight = 12;
    bottomSandHeight = 1.5;
    isFlowing = false;
    isPulsing = false;
  } else if (daysLeft >= 7 && daysLeft <= 30) {
    topSandHeight = 6;
    bottomSandHeight = 7.5;
    isFlowing = true;
    isPulsing = false;
  } else {
    topSandHeight = 1.5;
    bottomSandHeight = 12;
    isFlowing = true;
    isPulsing = true;
  }
  
  const sandFill = customSandColor || "#EAB308";

  return (
    <motion.div 
      className="relative w-11 h-15 flex items-center justify-center drop-shadow-[0_1.5px_3px_rgba(140,98,57,0.15)] scale-75 origin-bottom"
      animate={isPulsing ? {
        scale: [1, 1.06, 1],
        filter: [
          "drop-shadow(0 0 1px rgba(234,179,8,0.2))",
          `drop-shadow(0 0 6px ${glowColor === 'red-green' ? '#EF4444' : glowColor})`,
          "drop-shadow(0 0 1px rgba(234,179,8,0.2))"
        ]
      } : {}}
      transition={isPulsing ? {
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut"
      } : {}}
    >
      <svg className="w-full h-full" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="top-bulb">
            <path d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" />
          </clipPath>
          <clipPath id="bottom-bulb">
            <path d="M 13.5 24.5 L 18.5 24.5 C 19 29.5, 23.8 33.7, 23.8 42.5 L 8.2 42.5 C 8.2 33.7, 13 29.5, 13.5 24.5 Z" />
          </clipPath>
          
          <linearGradient id="christmas-sand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        
        {/* Fine wood/metal caps on top and bottom */}
        <ellipse cx="16" cy="4.5" rx="8.2" ry="0.8" fill="#8C6239" stroke="#E5DACE" strokeWidth="0.5" />
        <ellipse cx="16" cy="42.5" rx="8.2" ry="0.8" fill="#8C6239" stroke="#E5DACE" strokeWidth="0.5" />

        {/* Glass body background with delicate edge */}
        <path 
          d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 13.5 24.5 C 13 29.5, 8.2 33.7, 8.2 42.5 L 23.8 42.5 C 23.8 33.7, 19 29.5, 18.5 24.5 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" 
          fill="rgba(255, 255, 255, 0.08)" 
          stroke="rgba(140, 98, 57, 0.22)" 
          strokeWidth="0.8" 
        />
        <path 
          d="M 8.2 5 C 8.2 13.8, 13 18, 13.5 23 L 13.5 24.5 C 13 29.5, 8.2 33.7, 8.2 42.5 L 23.8 32 C 23.8 33.7, 19 29.5, 18.5 24.5 L 18.5 23 C 19 18, 23.8 13.8, 23.8 5 Z" 
          fill="rgba(251, 191, 36, 0.02)" 
        />

        {/* Upper chamber sand pool */}
        <g clipPath="url(#top-bulb)">
          <rect 
            x="4" 
            y={23 - topSandHeight} 
            width="24" 
            height={topSandHeight + 0.5} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 7 ${23 - topSandHeight + 0.5} Q 16 ${21.5 - topSandHeight} 25 ${23 - topSandHeight + 0.5} L 25 23 L 7 23 Z`} 
            fill="rgba(0,0,0,0.12)" 
          />
        </g>
        
        {/* Lower chamber sand pile */}
        <g clipPath="url(#bottom-bulb)">
          <rect 
            x="4" 
            y={42.5 - bottomSandHeight} 
            width="24" 
            height={bottomSandHeight + 0.5} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 6 42.5 Q 16 ${42.5 - bottomSandHeight - 2} 26 42.5 Z`} 
            fill={glowColor === 'red-green' ? 'url(#christmas-sand)' : sandFill} 
          />
          <path 
            d={`M 7 42.5 Q 16 ${42.5 - bottomSandHeight - 1} 25 42.5 Z`} 
            fill="rgba(255,255,255,0.12)" 
          />
        </g>

        {/* Falling stream line in the central neck */}
        {isFlowing && (
          <motion.line 
            x1="16" 
            y1="23" 
            x2="16" 
            y2={42.5 - bottomSandHeight} 
            stroke={glowColor === 'red-green' ? '#EF4444' : sandFill} 
            strokeWidth="1.2" 
            strokeDasharray="2.5 2.5"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          />
        )}
        
        {/* Curved reflection highlights */}
        <path d="M 10 7.5 C 10 13.5, 12.8 16.5, 12.8 19" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 10 40 C 10 34, 12.8 31, 12.8 28.5" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 22 7.5 C 22 13.5, 19.2 16.5, 19.2 19" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
        
        <ellipse cx="16" cy="23.8" rx="1.5" ry="0.5" fill="rgba(255, 255, 255, 0.1)" stroke="#1C1917" strokeWidth="0.4" />
      </svg>
    </motion.div>
  );
};
