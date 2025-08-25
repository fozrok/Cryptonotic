import React, { useState, useEffect } from 'react'
import './NetflixStyleHome.css'

const NetflixStyleHome = ({ modules, onModuleSelect }) => {
  const [selectedModule, setSelectedModule] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
  }

  const filteredModules = getFilteredModules()

  return (
    <div className={`netflix-home ${isLoaded ? 'loaded' : ''}`}>
      {/* Header */}
      <header className="netflix-header">
        <div className="header-content">
          <div className="logo">
            <img 
              src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" 
              alt="Bitcoin Is BAE Logo"
              className="header-logo"
            />
            <h1>Bitcoin Is BAE</h1>
          </div>
          <nav className="header-nav">
            <span className="nav-item active">Training Hub</span>
            <span className="nav-item">Progress</span>
            <span className="nav-item">Resources</span>
          </nav>
          <div className="header-actions">
            <div className="motivation-banner">
              <span>🚀 Your crypto journey starts here!</span>
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
            </div>
          </div>

          <div className="motivation-card">
            <div className="motivation-icon">⭐</div>
            <h4>This is Your Time!</h4>
            <p>With knowledge comes confidence. With action comes results. Start your crypto journey today.</p>
            <button className="motivation-btn">Start Learning</button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">Master Crypto Trading</h2>
              <p className="hero-subtitle">
                Comprehensive training modules designed for busy mums who want to learn crypto trading safely and confidently
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
                      <span className={`difficulty ${module.difficulty.toLowerCase()}`}>
                        {module.difficulty}
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
                      <span className={`difficulty ${module.difficulty.toLowerCase()}`}>
                        {module.difficulty}
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
          <p>&copy; 2024 Bitcoin Is BAE. Empowering busy mums to learn crypto trading safely and confidently.</p>
        </div>
      </footer>
    </div>
  )
}

export default NetflixStyleHome
