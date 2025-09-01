import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="mb-4">
      <div className="flex gap-4 text-xs">
        <a 
          href="https://x.com/darkeraofficial" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          X.COM/DARKERAOFFICIAL
        </a>
        <span className="text-gray-700">/</span>
        <a 
          href="https://github.com/darkeraofficial/dark-era" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          GITHUB.COM/DARKERAOFFICIAL/DARK-ERA
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;