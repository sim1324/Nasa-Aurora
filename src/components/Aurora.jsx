import React, { useState } from 'react';
import BlurText from './BlurText';
import SplashCursor from './SplashCursor';  // import the effect

const Aurora = () => {
  const [showNext, setShowNext] = useState(true);

  const handleNext = () => setShowNext(false);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          left: 0,
          top: 0,
          zIndex: 1,
        }}
        src="/videos/Aurora.mp4"
      />

      {/* Add the floating fluid color splash effect */}
      <SplashCursor />

      <div style={{
        position: 'relative',
        zIndex: 2,
        color: 'white',
        padding: '2rem',
        maxWidth: '700px',
        fontSize: '1.35rem',
        lineHeight: '1.7',
        textShadow: '0 0 6px rgba(0,0,0,0.7)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start'
      }}>
        <BlurText
          text="Now look at the night sky…"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[3.5rem] font-bold mb-8"
        />
        <BlurText
          text="it’s glowing with ribbons of green, purple, and red light. These magical lights are called auroras. They happen when the Sun’s charged particles travel along Earth’s magnetic field and crash into the upper atmosphere near the North and South Poles. The particles make oxygen and nitrogen in the air shine, like neon signs in the sky. People call them the Northern Lights or Southern Lights. For scientists, auroras are signs of space weather at work. For everyone watching, they are one of the most beautiful shows nature can create."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-lg mb-12"
        />
        {showNext && (
          <button
            onClick={handleNext}
            style={{
              fontSize: '1.5rem',
              color: '#00ffd1',
              backgroundColor: 'rgba(0, 25, 50, 0.4)',
              padding: '0.75rem 2.5rem',
              border: '2px solid #00ffd1',
              borderRadius: '9999px',
              cursor: 'pointer',
              boxShadow: '0 0 15px #00ffd1',
              transition: 'all 0.3s ease-in-out',
              fontWeight: '700',
              alignSelf: 'flex-start',
              userSelect: 'none',
              zIndex: 3,
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#00ffd1';
              e.currentTarget.style.color = '#001a21';
              e.currentTarget.style.boxShadow = '0 0 20px #00fff1, 0 0 30px #00ffd1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 25, 50, 0.4)';
              e.currentTarget.style.color = '#00ffd1';
              e.currentTarget.style.boxShadow = '0 0 15px #00ffd1';
            }}
          >
            Next!
          </button>
        )}
      </div>

    </div>
  );
};

export default Aurora;
