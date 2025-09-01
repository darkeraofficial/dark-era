import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`glitch-container ${className}`}>
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
    </div>
  );
};

export default GlitchText;