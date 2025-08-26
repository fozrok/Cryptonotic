import React, { createContext, useContext, useState } from 'react'
import { IMAGES } from '../utils/constants'

const LogoContext = createContext()

export const useLogoContext = () => {
  const context = useContext(LogoContext)
  if (!context) {
    throw new Error('useLogoContext must be used within a LogoProvider')
  }
  return context
}

export const LogoProvider = ({ children }) => {
  const [isZionixMode, setIsZionixMode] = useState(true) // Start with Zionix global logo as default

  const toggleLogo = () => {
    setIsZionixMode(!isZionixMode)
  }

  const currentLogo = isZionixMode ? IMAGES.ZIONIX_GLOBAL : IMAGES.LOGO
  const logoAlt = isZionixMode ? 'Zionix Global Logo' : 'BIB Icon Logo'
  const showText = !isZionixMode // Only show text when not in Zionix mode
  
  // Color schemes for different logo states
  const colorScheme = isZionixMode ? {
    primary: '#229ca0', // Updated aqua green to match logo
    secondary: '#000080', // Navy blue
    gradient: 'linear-gradient(45deg, #229ca0, #000080)',
    textGradient: 'linear-gradient(45deg, #229ca0, #000080)',
    primaryRgba: 'rgba(34, 156, 160, 0.1)',
    secondaryRgba: 'rgba(0, 0, 128, 0.1)',
    primaryRgbaBorder: 'rgba(34, 156, 160, 0.3)'
  } : {
    primary: '#bf1b69', // Original magenta
    secondary: '#feca57', // Original orange
    gradient: 'linear-gradient(45deg, #bf1b69, #ff6b6b, #feca57)',
    textGradient: 'linear-gradient(45deg, #ff6b6b, #feca57)',
    primaryRgba: 'rgba(254, 202, 87, 0.1)',
    secondaryRgba: 'rgba(255, 107, 107, 0.1)',
    primaryRgbaBorder: 'rgba(254, 202, 87, 0.3)'
  }

  const value = {
    currentLogo,
    logoAlt,
    isZionixMode,
    showText,
    colorScheme,
    toggleLogo
  }

  return (
    <LogoContext.Provider value={value}>
      {children}
    </LogoContext.Provider>
  )
}
