import React, { useState, useEffect } from 'react'
import { useLogoContext } from '../context/LogoContext'
import './NetflixStyleHome.css'

const NetflixStyleHome = ({ modules, onModuleSelect, currentSection, onSectionChange }) => {
  const [selectedModule, setSelectedModule] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const { currentLogo, logoAlt, showText, isZionixMode, colorScheme, toggleLogo } = useLogoContext()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    setActiveCategory('all')
  }, [currentSection])

  const handleModuleHover = (moduleId) => {
    setSelectedModule(moduleId)
  }

  const handleModuleLeave = () => {
    setSelectedModule(null)
  }

  const handleModuleClick = (moduleId) => {
    onModuleSelect(moduleId)
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  const getFilteredModules = () => {
    if (currentSection === 'crypto') {
      switch (activeCategory) {
        case 'risk':
          return modules.filter(module => module.id === 'risk')
        case 'technical':
          return modules.filter(module => ['candlestick', 'chart'].includes(module.id))
        case 'strategy':
          return modules.filter(module => ['terminology'].includes(module.id))
        default:
          return modules
      }
    } else {
      // For booknotic modules, all categories show all modules
      return modules
    }
  }

  const filteredModules = getFilteredModules()

  return (
    <div 
      className={`netflix-home ${isLoaded ? 'loaded' : ''}`}
      style={{
        '--primary-color': colorScheme.primary,
        '--secondary-color': colorScheme.secondary,
        '--gradient': colorScheme.gradient,
        '--text-gradient': colorScheme.textGradient,
        '--primary-color-rgba': colorScheme.primaryRgba,
        '--secondary-color-rgba': colorScheme.secondaryRgba,
        '--primary-color-rgba-border': colorScheme.primaryRgbaBorder
      }}
    >
      {/* Header */}
      <header className="netflix-header">
        <div className="header-content">
          <div className={`logo ${isZionixMode ? 'zionix-mode' : ''}`}>
            <img 
              src={currentLogo}
              alt={logoAlt}
              className="header-logo clickable-logo"
              onClick={toggleLogo}
              title="Click to toggle logo"
            />
            {showText && <h1>Bitcoin Is BAE</h1>}
          </div>
          <nav className="header-nav">
            <div 
              className={`nav-item ${currentSection === 'crypto' ? 'active' : ''}`}
              onClick={() => onSectionChange('crypto')}
            >
              <span className="nav-icon">
                <img 
                  src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" 
                  alt="BIB Logo"
                  className="nav-icon-image"
                />
              </span>
              <span>Crypto Training</span>
            </div>
            <div 
              className={`nav-item ${currentSection === 'booknotic' ? 'active' : ''}`}
              onClick={() => onSectionChange('booknotic')}
            >
              <span className="nav-icon">📖</span>
              <span>Booknotic</span>
            </div>
          </nav>
          <div className="header-actions">
            <div className="motivation-banner">
              <a 
                href="https://zionixglobal.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="motivation-link"
              >
                <span>SPECIAL OFFER: Join Zionix Global now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Training Categories</h3>
            <div className="sidebar-nav">
              <div 
                className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('all')}
              >
                <span className="nav-icon">📚</span>
                <span>All Modules</span>
              </div>
              {currentSection === 'crypto' && (
                <>
                  <div 
                    className={`nav-item ${activeCategory === 'risk' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('risk')}
                  >
                    <span className="nav-icon">🎯</span>
                    <span>Risk Management</span>
                  </div>
                  <div 
                    className={`nav-item ${activeCategory === 'technical' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('technical')}
                  >
                    <span className="nav-icon">📊</span>
                    <span>Technical Analysis</span>
                  </div>
                  <div 
                    className={`nav-item ${activeCategory === 'strategy' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('strategy')}
                  >
                    <span className="nav-icon">💡</span>
                    <span>Strategy</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="motivation-card">
            <div className="motivation-icon">⭐</div>
            <h4>This is Your Time!</h4>
            <p>
              {currentSection === 'crypto' 
                ? 'With knowledge comes confidence. With action comes results. Start your crypto journey today.'
                : 'With wisdom comes transformation. With practice comes mastery. Start your personal development journey today.'
              }
            </p>
            <button className="motivation-btn">Start Learning</button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">
                {currentSection === 'crypto' ? 'Wealth' : 'Wisdom'}
              </h2>
              <p className="hero-subtitle">
                {currentSection === 'crypto' 
                  ? 'Comprehensive training modules designed for busy mums who want to learn crypto trading safely and confidently'
                  : 'Transform your mindset and build wealth through proven principles from the world\'s most successful people'
                }
              </p>
            </div>
          </section>

          {/* Featured Modules */}
          <section className="featured-section">
            <h3 className="section-title">Featured Training</h3>
            <div className="featured-grid">
              {filteredModules.slice(0, 3).map((module) => (
                <div
                  key={module.id}
                  className={`featured-card ${selectedModule === module.id ? 'selected' : ''}`}
                  onMouseEnter={() => handleModuleHover(module.id)}
                  onMouseLeave={handleModuleLeave}
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className="card-image">
                    {module.image.startsWith('http') ? (
                      <img 
                        src={module.image} 
                        alt={module.name}
                        className="card-image-src"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <div className="card-icon">{module.image}</div>
                    )}
                    <div className="card-overlay">
                      <button className="play-button">▶</button>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-badge">Recently Added</div>
                    <h4 className="card-title">{module.name}</h4>
                    <p className="card-description">{module.description}</p>
                    <div className="card-meta">
                      <span className="duration">{module.duration}</span>
                      <span className={`difficulty ${(module.difficulty || module.topic || 'beginner').toLowerCase()}`}>
                        {module.difficulty || module.topic || 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Modules */}
          <section className="modules-section">
            <h3 className="section-title">
              {activeCategory === 'all' ? 'All Training Modules' : 
               activeCategory === 'risk' ? 'Risk Management Modules' :
               activeCategory === 'technical' ? 'Technical Analysis Modules' :
               'Strategy Modules'}
            </h3>
            <div className="modules-grid">
              {filteredModules.map((module) => (
                <div
                  key={module.id}
                  className={`module-card ${selectedModule === module.id ? 'selected' : ''}`}
                  onMouseEnter={() => handleModuleHover(module.id)}
                  onMouseLeave={handleModuleLeave}
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className="card-header">
                    {module.image.startsWith('http') ? (
                      <img 
                        src={module.image} 
                        alt={module.name}
                        className="card-image-src"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <div className="card-icon">{module.image}</div>
                    )}
                    <div className="card-overlay">
                      <button className="play-button">▶</button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{module.name}</h4>
                    <p className="card-description">{module.description}</p>
                    <div className="card-meta">
                      <span className="duration">{module.duration}</span>
                      <span className={`difficulty ${(module.difficulty || module.topic || 'beginner').toLowerCase().replace(/\s+/g, '-')}`}>
                        {module.difficulty || module.topic || 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Progress Section */}
          <section className="progress-section">
            <h3 className="section-title">Your Learning Progress</h3>
            <div className="progress-grid">
              <div className="progress-card">
                <div className="progress-icon">📊</div>
                <div className="progress-content">
                  <h4>Modules Completed</h4>
                  <p>0 of 4 modules</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
              <div className="progress-card">
                <div className="progress-icon">⏱️</div>
                <div className="progress-content">
                  <h4>Time Spent</h4>
                  <p>0 minutes</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
              <div className="progress-card">
                <div className="progress-icon">🏆</div>
                <div className="progress-content">
                  <h4>Achievements</h4>
                  <p>0 unlocked</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="resources-section">
            <h3 className="sidebar-title">Training Resources</h3>
            <div className="resource-list">
              <div className="resource-item">
                <div className="resource-icon">📖</div>
                <div className="resource-content">
                  <h4>Quick Start Guide</h4>
                  <p>Get started with crypto trading basics</p>
                </div>
                <span className="external-link">↗</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">📚</div>
                <div className="resource-content">
                  <h4>Resource Library</h4>
                  <p>Access all training materials</p>
                </div>
                <span className="external-link">↗</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">👥</div>
                <div className="resource-content">
                  <h4>Community Forum</h4>
                  <p>Connect with other learners</p>
                </div>
                <span className="external-link">↗</span>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🆘</div>
                <div className="resource-content">
                  <h4>Support Center</h4>
                  <p>Get help when you need it</p>
                </div>
                <span className="external-link">↗</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="netflix-footer">
        <div className="footer-content">
          <p>&copy; 2024 Zionix Global. Empowering busy mums to learn crypto trading safely and confidently.</p>
        </div>
      </footer>
    </div>
  )
}

export default NetflixStyleHome
