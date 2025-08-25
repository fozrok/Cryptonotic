import React, { useState } from 'react'
import './App.css'
import RiskManagement from './components/RiskManagement'
import CryptoTerminology from './components/CryptoTerminology'
import CandlestickPatterns from './components/CandlestickPatterns'
import ChartPatterns from './components/ChartPatterns'

function App() {
  const [currentModule, setCurrentModule] = useState('home')

  const modules = [
    { id: 'risk', name: 'Risk Management Essentials', component: RiskManagement },
    { id: 'terminology', name: 'Crypto Trading Terminology', component: CryptoTerminology },
    { id: 'candlestick', name: 'Candlestick Patterns Explained', component: CandlestickPatterns },
    { id: 'chart', name: 'Chart Patterns for Beginners', component: ChartPatterns }
  ]

  const renderModule = () => {
    const module = modules.find(m => m.id === currentModule)
    if (module) {
      const Component = module.component
      return <Component />
    }
    return (
      <div className="home-container">
        <h1>Bitcoin Is BAE</h1>
        <h2>Interactive Crypto Training Modules</h2>
        <div className="modules-grid">
          {modules.map((module) => (
            <div 
              key={module.id} 
              className="module-card"
              onClick={() => setCurrentModule(module.id)}
            >
              <h3>{module.name}</h3>
              <p>Click to start learning</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {currentModule !== 'home' && (
        <button 
          className="home-button"
          onClick={() => setCurrentModule('home')}
        >
          ← Back to Home
        </button>
      )}
      {renderModule()}
    </div>
  )
}

export default App
