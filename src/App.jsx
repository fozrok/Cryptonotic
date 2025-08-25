import React, { useState, useEffect } from 'react'
import './App.css'
import SplashPage from './components/SplashPage'
import NetflixStyleHome from './components/NetflixStyleHome'
import RiskManagement from './components/RiskManagement'
import CryptoTerminology from './components/CryptoTerminology'
import CandlestickPatterns from './components/CandlestickPatterns'
import ChartPatterns from './components/ChartPatterns'

function App() {
  const [currentView, setCurrentView] = useState('splash')
  const [currentModule, setCurrentModule] = useState(null)

  const modules = [
    { 
      id: 'risk', 
      name: 'Risk Management Essentials', 
      component: RiskManagement,
      description: 'Master the art of protecting your crypto investments',
      duration: '45 min',
      difficulty: 'Beginner',
      image: 'https://res.cloudinary.com/dhxriuzu5/image/upload/v1756090791/BIB-starter-1_mslud2.jpg'
    },
    { 
      id: 'terminology', 
      name: 'Crypto Trading Terminology', 
      component: CryptoTerminology,
      description: 'Learn the language of cryptocurrency trading',
      duration: '30 min',
      difficulty: 'Beginner',
      image: 'https://res.cloudinary.com/dhxriuzu5/image/upload/v1756090791/BIB-starter-5_h5ootk.jpg'
    },
    { 
      id: 'candlestick', 
      name: 'Candlestick Patterns Explained', 
      component: CandlestickPatterns,
      description: 'Read and interpret candlestick patterns',
      duration: '40 min',
      difficulty: 'Intermediate',
      image: 'https://res.cloudinary.com/dhxriuzu5/image/upload/v1756091216/BIB-starter-6_oe9zp5.jpg'
    },
    { 
      id: 'chart', 
      name: 'Chart Patterns for Beginners', 
      component: ChartPatterns,
      description: 'Master technical analysis with chart patterns',
      duration: '35 min',
      difficulty: 'Intermediate',
      image: 'https://res.cloudinary.com/dhxriuzu5/image/upload/v1756090791/BIB-starter-1_mslud2.jpg'
    }
  ]

  const handleModuleSelect = (moduleId) => {
    setCurrentModule(moduleId)
    setCurrentView('module')
  }

  const handleBackToHome = () => {
    setCurrentModule(null)
    setCurrentView('home')
  }

  const renderView = () => {
    switch (currentView) {
      case 'splash':
        return <SplashPage onContinue={() => setCurrentView('home')} />
      case 'home':
        return (
          <NetflixStyleHome 
            modules={modules}
            onModuleSelect={handleModuleSelect}
          />
        )
      case 'module':
        const selectedModule = modules.find(m => m.id === currentModule)
        if (selectedModule) {
          const ModuleComponent = selectedModule.component
          return (
            <div className="module-view">
              <button className="back-button" onClick={handleBackToHome}>
                ← Back to Training Hub
              </button>
              <ModuleComponent />
            </div>
          )
        }
        return null
      default:
        return <SplashPage onContinue={() => setCurrentView('home')} />
    }
  }

  return (
    <div className="app">
      {renderView()}
    </div>
  )
}

export default App
