import React, { useState } from 'react'
import './ImageTooltip.css'

const ImageTooltip = ({ src, alt, children, className = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <span 
      className={`image-tooltip-trigger ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div 
          className="image-tooltip"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          <img src={src} alt={alt} />
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </span>
  )
}

export default ImageTooltip
