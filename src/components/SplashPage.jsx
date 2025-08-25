import React, { useState, useEffect } from 'react'
import './SplashPage.css'

const SplashPage = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showTagline, setShowTagline] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Animate elements in sequence
    setTimeout(() => setIsVisible(true), 500)
    setTimeout(() => setShowSubtitle(true), 1500)
    setTimeout(() => setShowTagline(true), 2500)
    setTimeout(() => setShowButton(true), 3500)
  }, [])

  return (
    <div className="splash-page">
      <div className="splash-background">
        <div className="gradient-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="splash-content">
        <div className={`logo-container ${isVisible ? 'visible' : ''}`}>
          <div className="logo-icon">
            <img 
              src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" 
              alt="Bitcoin Is BAE Logo"
              className="bib-logo"
            />
          </div>
          <h1 className="main-title">Bitcoin Is BAE</h1>
        </div>

        <div className={`subtitle ${showSubtitle ? 'visible' : ''}`}>
          <h2>Interactive Crypto Training Modules</h2>
        </div>

        <div className={`tagline ${showTagline ? 'visible' : ''}`}>
          <p>Empowering busy mums to learn crypto trading safely and confidently</p>
        </div>

        <div className={`cta-section ${showButton ? 'visible' : ''}`}>
          <button className="continue-button" onClick={onContinue}>
            <span>Enter Training Hub</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
