import { useState } from 'react'
import { getModulesBySection } from '../data/modules'

export const useAppState = () => {
  const [currentView, setCurrentView] = useState('splash')
  const [currentModule, setCurrentModule] = useState(null)
  const [currentSection, setCurrentSection] = useState('crypto')

  const handleModuleSelect = (moduleId) => {
    setCurrentModule(moduleId)
    setCurrentView('module')
  }

  const handleBackToHome = () => {
    setCurrentModule(null)
    setCurrentView('home')
  }

  const handleSectionChange = (section) => {
    setCurrentSection(section)
    setCurrentModule(null)
  }

  const getCurrentModules = () => {
    return getModulesBySection(currentSection)
  }

  const getCurrentModule = () => {
    const modules = getCurrentModules()
    return modules.find(module => module.id === currentModule)
  }

  return {
    currentView,
    setCurrentView,
    currentModule,
    currentSection,
    handleModuleSelect,
    handleBackToHome,
    handleSectionChange,
    getCurrentModules,
    getCurrentModule
  }
}
