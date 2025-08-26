import React from 'react'
import { IMAGES } from '../../utils/constants'

const ModuleLayout = ({ 
  title, 
  description, 
  imageSrc, 
  sections, 
  currentSection, 
  completedSections,
  onSectionChange,
  onMarkComplete,
  onNext,
  onPrev,
  children 
}) => {
  return (
    <div className="module-container">
      <div className="module-header">
        <div className="header-image">
          <img 
            src={imageSrc || IMAGES.LOGO} 
            alt={title}
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="module-content">
        <div className="sidebar">
          <h3>Course Sections</h3>
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`sidebar-item ${currentSection === index ? 'active' : ''} ${completedSections.includes(index) ? 'completed' : ''}`}
              onClick={() => onSectionChange(index)}
            >
              <span className="section-number">{index + 1}</span>
              <div className="section-info">
                <h4>{section.title}</h4>
                <span className="duration">{section.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="section-content">
            <h2>{sections[currentSection].title}</h2>
            
            {children}

            <div className="section-actions">
              <button 
                className="complete-btn"
                onClick={() => onMarkComplete(currentSection)}
                disabled={completedSections.includes(currentSection)}
              >
                {completedSections.includes(currentSection) ? '✓ Completed' : 'Mark as Complete'}
              </button>
            </div>

            <div className="navigation">
              <button 
                className="nav-btn"
                onClick={onPrev}
                disabled={currentSection === 0}
              >
                ← Previous
              </button>
              <button 
                className="nav-btn"
                onClick={onNext}
                disabled={currentSection === sections.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleLayout
