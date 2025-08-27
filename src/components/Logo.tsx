import React from 'react';
import type { Theme } from '../types';

interface LogoProps {
  theme: Theme;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  const fillColor = theme === 'dark' ? '#e5e7eb' : '#1f2937'; // Tailwind gray-200 and gray-800

  return (
    <svg 
      width="80" 
      height="40" 
      viewBox="0 0 80 40" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="مگامیل لوگو"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@700&display=swap');
          .logo-text {
            font-family: 'Vazirmatn', sans-serif;
            font-size: 24px;
            font-weight: 700;
            transition: fill 0.3s ease;
          }
        `}
      </style>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="logo-text" style={{ fill: fillColor }}>
        مگامیل
      </text>
    </svg>
  );
};

export default Logo;