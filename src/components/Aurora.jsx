import React, { useState } from 'react';

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
        src="/videos/Aurora_Video.mp4"
      />

      <div style={{ position: 'relative', zIndex: 2, color: 'white', padding: '1em' }}>
      </div>
    </div>
  );
};

export default Aurora;
