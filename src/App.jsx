import React from 'react'
import './App.css'
import SplashPage from './components/SplashPage'
import NetflixStyleHome from './components/NetflixStyleHome'
import { useAppState } from './hooks/useAppState'
import { LogoProvider } from './context/LogoContext'

function App() {
  const {
    currentView,
    setCurrentView,
    currentModule,
    currentSection,
    handleModuleSelect,
    handleBackToHome,
    handleSectionChange,
    getCurrentModules,
    getCurrentModule
  } = useAppState()

  const renderView = () => {
    switch (currentView) {
      case 'splash':
        return <SplashPage onContinue={() => setCurrentView('home')} />
      case 'home':
        return (
          <NetflixStyleHome 
            modules={getCurrentModules()}
            onModuleSelect={handleModuleSelect}
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />
        )
      case 'module':
        const selectedModule = getCurrentModule()
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
    <LogoProvider>
      <div className="app">
        {renderView()}
      </div>
    </LogoProvider>
  )
}

export default App
