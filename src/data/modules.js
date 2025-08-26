import { IMAGES, VIDEOS, LEARNING_STYLES } from '../utils/constants'
import RiskManagement from '../components/RiskManagement'
import CryptoTerminology from '../components/CryptoTerminology'
import CandlestickPatterns from '../components/CandlestickPatterns'
import ChartPatterns from '../components/ChartPatterns'
import PsychologyOfMoney from '../components/PsychologyOfMoney'
import ThinkAndGrowRich from '../components/ThinkAndGrowRich'
import RichestManInBabylon from '../components/RichestManInBabylon'
import TheSecret from '../components/TheSecret'

export const cryptoModules = [
  { 
    id: 'risk', 
    name: 'Risk Management Essentials', 
    component: RiskManagement,
    description: 'Master the art of protecting your crypto investments',
    duration: '45 min',
    difficulty: 'Beginner',
    image: IMAGES.RISK_MANAGEMENT,
    category: 'Risk Management'
  },
  { 
    id: 'terminology', 
    name: 'Crypto Trading Terminology', 
    component: CryptoTerminology,
    description: 'Learn the language of cryptocurrency trading',
    duration: '30 min',
    difficulty: 'Beginner',
    image: IMAGES.CRYPTO_TERMINOLOGY,
    category: 'Technical Analysis'
  },
  { 
    id: 'candlestick', 
    name: 'Candlestick Patterns Explained', 
    component: CandlestickPatterns,
    description: 'Read and interpret candlestick patterns',
    duration: '40 min',
    difficulty: 'Intermediate',
    image: IMAGES.CANDLESTICK_PATTERNS,
    category: 'Technical Analysis'
  },
  { 
    id: 'chart', 
    name: 'Chart Patterns for Beginners', 
    component: ChartPatterns,
    description: 'Master technical analysis with chart patterns',
    duration: '35 min',
    difficulty: 'Intermediate',
    image: IMAGES.RISK_MANAGEMENT,
    category: 'Technical Analysis'
  }
]

export const booknoticModules = [
  {
    id: 'psychology-of-money',
    name: 'The Psychology of Money',
    component: PsychologyOfMoney,
    description: 'Understanding the psychology behind financial decisions',
    duration: '20 min',
    topic: 'wealth mindset',
    image: IMAGES.PSYCHOLOGY_OF_MONEY,
    category: 'Booknotic'
  },
  {
    id: 'think-and-grow-rich',
    name: 'Think & Grow Rich',
    component: ThinkAndGrowRich,
    description: 'Master the principles of success and wealth creation',
    duration: '20 min',
    topic: 'wealth mindset',
    image: IMAGES.THINK_AND_GROW_RICH,
    category: 'Booknotic'
  },
  {
    id: 'richest-man-babylon',
    name: 'The Richest Man in Babylon',
    component: RichestManInBabylon,
    description: 'Learn timeless wealth-building principles',
    duration: '20 min',
    topic: 'wealth mindset',
    image: IMAGES.RICHEST_MAN_BABYLON,
    category: 'Booknotic'
  },
  {
    id: 'the-secret',
    name: 'The Secret',
    component: TheSecret,
    description: 'Master the Law of Attraction to manifest your desires',
    duration: '20 min',
    topic: 'wealth mindset',
    image: IMAGES.THE_SECRET,
    category: 'Booknotic'
  }
]

// Helper function to get modules by section
export const getModulesBySection = (section) => {
  return section === 'crypto' ? cryptoModules : booknoticModules
}

// Helper function to get module by ID
export const getModuleById = (id) => {
  const allModules = [...cryptoModules, ...booknoticModules]
  return allModules.find(module => module.id === id)
}
