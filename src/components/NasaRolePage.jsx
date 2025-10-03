import React from 'react';

const imageCards = [
  {
    src: '/nasa_image1.webp',
    alt: 'NASA Scientists prepping satellite',
    text: 'NASA engineers prepare a space weather satellite. Missions like SOHO and Parker Solar Probe help us study the Sun and predict space storms.'
  },
  {
    src: '/nasa_image2.jpg',
    alt: 'Satellite Engineering Team',
    text: 'Teams work on spacecraft in ultra-clean labs, prepping them for their journey to monitor solar activity and warn us about incoming storms.'
  },
  {
    src: '/nasa-image3.jpg',
    alt: 'Monitoring Solar Data',
    text: 'Researchers track solar data using live dashboards, keeping a close watch on solar flares and CMEs—just like weather forecasters, but for space!'
  },
  {
    src: '/nasa_image4.jpg',
    alt: 'Satellites observing the Sun',
    text: 'Satellites like DSCOVR track solar wind and storm activity, sending fast alerts to astronauts, airlines, and satellite operators.'
  }
];

const mainText = (
  <div style={{
    textAlign: 'center',
    color: '#fff',
    textShadow: '0 0 14px #202874',
    maxWidth: '900px',
    margin: '0 auto',
    marginBottom: '2rem'
  }}>
    <h1>Welcome to Mission Control for Space Weather!</h1>
    <p style={{
      fontSize: '1.18rem',
      color: '#e0e7ff',
      lineHeight: '1.6'
    }}>
      Scientists at NASA — and all over the world — are like weather forecasters, but for space. They use special satellites to keep an eye on the Sun every single minute, studying solar flares, coronal mass ejections (CMEs), and solar wind.<br /><br />
      When a space storm is on its way, they warn astronauts, airlines, power companies, and even satellite operators so everyone can stay safe and prepared.<br /><br />
      NASA has exciting missions that help with this, like SOHO (which watches the Sun’s activity), Parker Solar Probe (flying closer to the Sun than ever before), and DSCOVR (which monitors solar wind near Earth). Thanks to these missions, we can get ready before the storm reaches us!
    </p>
  </div>
);

const NasaRolePage = () => (
  <div style={{
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    background: "url('/image.jpg') center center/cover no-repeat fixed"
  }}>
    {/* Overlay for readability */}
    <div style={{
      position: 'absolute',
      top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'rgba(20,30,60,0.74)',
      zIndex: 1
    }} />

    {/* Main Content */}
    <div style={{
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1200px',
      margin: 'auto',
      padding: '3rem 1.5rem'
    }}>
      {mainText}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
      }}>
        {imageCards.map((img, idx) => (
          <div key={idx} style={{
            background: 'rgba(28,36,72,0.93)',
            borderRadius: '16px',
            boxShadow: '0 0 20px rgba(60,80,160,0.22)',
            padding: '1rem 1rem 1.5rem 1rem',
            textAlign: 'center'
          }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                maxWidth: '330px',
                borderRadius: '10px',
                marginBottom: '1rem',
                boxShadow: '0 0 8px #65a3fa'
              }}
            />
            <p style={{
              color: '#e4eafc',
              fontSize: '1rem',
              marginTop: '0'
            }}>
              {img.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NasaRolePage;
