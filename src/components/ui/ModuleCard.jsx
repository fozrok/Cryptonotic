import React from 'react'

const ModuleCard = ({ module, onClick, isFeatured = false }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(module.id)
    }
  }

  const renderImage = () => {
    if (module.image && module.image.startsWith('http')) {
      return (
        <img 
          src={module.image} 
          alt={module.name}
          className="card-image-src"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      )
    }
    return (
      <div className="card-icon" style={{ display: 'none' }}>
        {module.image || '📚'}
      </div>
    )
  }

  return (
    <div 
      className={`module-card ${isFeatured ? 'featured' : ''}`}
      onClick={handleClick}
    >
      <div className="card-header">
        <div className="card-image">
          {renderImage()}
          <div className="card-icon" style={{ display: module.image && module.image.startsWith('http') ? 'none' : 'flex' }}>
            {module.image || '📚'}
          </div>
        </div>
        <div className="card-overlay">
          <div className="card-badge">{module.difficulty}</div>
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{module.name}</h3>
        <p className="card-description">{module.description}</p>
        <div className="card-meta">
          <span className="duration">{module.duration}</span>
          <span className="difficulty">{module.difficulty}</span>
        </div>
      </div>
    </div>
  )
}

export default ModuleCard
