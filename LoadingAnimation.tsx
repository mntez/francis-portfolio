'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(0);
  
  const images = [
    'image 1.jpg',
    'image 2.png',
    'image 3.jpg',
    'image 4.png',
    'image 5.png',
    'image 6.png',
    'image 7.png',
    'image 8.png',
    'image 9.png',
    'image 10.png',
    'image 11.png',
    'image 12.png',
    'hero-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const imageIndex = Math.min(Math.floor((loading / 100) * images.length), images.length - 1);
  const currentImage = images[imageIndex];

  return (
    <div className="loader-container">
      <div 
        className="loader-bg"
        style={{ backgroundImage: `url('/images/${currentImage}')` }}
      />
      <div className="loader-overlay" />
      <div className="loader-content">
        <h1 className="loader-title">
          <span className="italic-text">PORTFOLIO</span>
        </h1>
        <div className="loader-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${loading}%` }}
            />
          </div>
          <p className="progress-percentage">{loading}%</p>
        </div>
      </div>
    </div>
  );
}