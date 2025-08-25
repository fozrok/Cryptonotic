import React, { useState } from 'react'
import './Module.css'

const RiskManagement = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])

  const sections = [
    {
      title: "Introduction to Risk Management",
      content: "Learn the fundamentals of managing risk in crypto trading to protect your investments.",
      duration: "5 minutes"
    },
    {
      title: "The Risk Pyramid",
      content: "Understand the different levels of risk and how they affect your trading strategy.",
      duration: "8 minutes"
    },
    {
      title: "Position Sizing Calculator",
      content: "Interactive tool to calculate the optimal position size based on your risk tolerance.",
      duration: "10 minutes"
    },
    {
      title: "Stop Loss Strategies",
      content: "Learn how to set effective stop losses to minimize potential losses.",
      duration: "7 minutes"
    },
    {
      title: "Emotional Management",
      content: "Master the psychological aspects of trading and avoid emotional decisions.",
      duration: "8 minutes"
    },
    {
      title: "Golden Rules of Risk Management",
      content: "Essential rules every crypto trader should follow to stay safe.",
      duration: "7 minutes"
    }
  ]

  const markAsComplete = (sectionIndex) => {
    if (!completedSections.includes(sectionIndex)) {
      setCompletedSections([...completedSections, sectionIndex])
    }
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h1>Risk Management Essentials</h1>
        <p>Master the art of protecting your crypto investments</p>
      </div>

      <div className="module-content">
        <div className="sidebar">
          <h3>Course Sections</h3>
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`sidebar-item ${currentSection === index ? 'active' : ''} ${completedSections.includes(index) ? 'completed' : ''}`}
              onClick={() => setCurrentSection(index)}
            >
              <span className="section-number">{index + 1}</span>
              <div className="section-info">
                <h4>{section.title}</h4>
                <p>{section.duration}</p>
              </div>
              {completedSections.includes(index) && <span className="checkmark">✓</span>}
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="section-content">
            <h2>{sections[currentSection].title}</h2>
            <p>{sections[currentSection].content}</p>
            
            <div className="section-actions">
              <button 
                className="complete-btn"
                onClick={() => markAsComplete(currentSection)}
                disabled={completedSections.includes(currentSection)}
              >
                {completedSections.includes(currentSection) ? 'Completed ✓' : 'Mark as Complete'}
              </button>
            </div>

            <div className="navigation">
              <button 
                onClick={prevSection}
                disabled={currentSection === 0}
                className="nav-btn"
              >
                ← Previous
              </button>
              <button 
                onClick={nextSection}
                disabled={currentSection === sections.length - 1}
                className="nav-btn"
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

export default RiskManagement
