import React from 'react'
import './Module.css'

const ChartPatterns = () => {
  return (
    <div className="module-container">
      <div className="module-header">
        <div className="header-image">
          <img 
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756091216/BIB-starter-6_oe9zp5.jpg" 
            alt="Chart Patterns for Beginners"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>Chart Patterns for Beginners</h1>
          <p>Master technical analysis with chart patterns</p>
        </div>
      </div>
      <div className="main-content">
        <div className="section-content">
          <h2>Coming Soon</h2>
          <p>This module is currently under development. It will include interactive chart pattern recognition, trend analysis tools, and comprehensive guides for beginners.</p>
        </div>
      </div>
    </div>
  )
}

export default ChartPatterns
