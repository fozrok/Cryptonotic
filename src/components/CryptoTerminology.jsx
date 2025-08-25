import React, { useState } from 'react'
import './Module.css'

const CryptoTerminology = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])

  const sections = [
    {
      title: "Introduction to Crypto Language",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Learning crypto terms is like learning a new language! Just like how you learned words like 'apple' and 'ball' when you were little, crypto has its own special words. Think of it as learning the secret code that crypto traders use to talk to each other!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Crypto terminology is the foundation of understanding the cryptocurrency ecosystem. These terms represent fundamental concepts that govern how digital currencies work, how they're traded, and how the market operates. Understanding the language is essential for making informed decisions."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Cryptocurrency terminology encompasses technical, financial, and blockchain-specific terms. These terms have evolved from traditional finance, computer science, and blockchain technology. Mastery of this vocabulary enables effective communication, analysis, and participation in the crypto ecosystem."
        }
      },
      duration: "5 minutes"
    },
    {
      title: "Blockchain Basics",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A blockchain is like a digital notebook that everyone can see! Imagine you have a special notebook where you write down every time you trade your toys. Everyone in your class has the same notebook, so no one can cheat by changing what's written. It's like a super honest record book!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) that are linked and secured using cryptography. The key principle is decentralization - no single entity controls the data, making it transparent and resistant to tampering."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "A blockchain consists of blocks containing transaction data, timestamps, and cryptographic hashes linking to the previous block. Each block is verified by network participants (nodes) through consensus mechanisms like Proof of Work or Proof of Stake. This creates an immutable, transparent record of all transactions."
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Trading Terms",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Trading terms are like the special words you use when playing a game! 'Buy' means you want to get something, 'sell' means you want to give it away, and 'hold' means you want to keep it for later. It's like playing with trading cards - sometimes you buy new ones, sometimes you sell old ones!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Trading terminology describes the actions and strategies used in buying and selling cryptocurrencies. These terms represent fundamental market mechanics and trading psychology. Understanding these terms is crucial for executing trades and managing risk effectively."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Key trading terms include: Long (buying expecting price to rise), Short (selling expecting price to fall), FOMO (fear of missing out), HODL (hold on for dear life), FUD (fear, uncertainty, doubt), Moon (significant price increase), and Whale (large investor). These terms reflect market sentiment and trading strategies."
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Market Analysis Terms",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Market analysis is like being a detective! You look at clues (like charts and numbers) to figure out what might happen next. 'Bullish' means you think prices will go up (like a bull pushing up), and 'bearish' means you think prices will go down (like a bear swiping down). It's like predicting the weather!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Market analysis terminology describes methods for evaluating cryptocurrency prices and market conditions. These terms represent different approaches to understanding market behavior, from technical analysis (chart patterns) to fundamental analysis (project evaluation)."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Market analysis terms include: Bull/Bear market (rising/falling prices), Support/Resistance (price levels), Volume (trading activity), Market cap (total value), Liquidity (ease of buying/selling), Volatility (price fluctuations), and Correlation (relationship between assets). These metrics help assess market conditions and make trading decisions."
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Wallet & Security Terms",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A crypto wallet is like a special piggy bank for digital money! It has a 'public key' (like your house address that everyone can see) and a 'private key' (like your secret house key that only you have). The private key is super important - it's like the password to your money!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Wallet and security terminology describes how cryptocurrencies are stored and protected. The fundamental principle is that ownership is determined by cryptographic keys, not physical possession. Understanding these terms is essential for safely managing digital assets."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Key terms include: Public key (address for receiving funds), Private key (secret for accessing funds), Seed phrase (backup words), Hot wallet (connected to internet), Cold wallet (offline storage), 2FA (two-factor authentication), and Gas fees (transaction costs). Security practices are crucial for protecting digital assets."
        }
      },
      duration: "7 minutes"
    },
    {
      title: "Advanced Concepts",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Advanced crypto concepts are like learning the special moves in a video game! 'DeFi' is like a bank that works without bankers, 'NFTs' are like special trading cards that can't be copied, and 'Smart contracts' are like robot helpers that automatically do things when certain conditions are met!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Advanced cryptocurrency concepts represent the evolution of blockchain technology beyond simple transactions. These terms describe innovative applications that expand the utility of cryptocurrencies, from decentralized finance to digital ownership and automated agreements."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Advanced terms include: DeFi (decentralized finance), NFTs (non-fungible tokens), Smart contracts (self-executing agreements), Yield farming (earning rewards), Liquidity pools (trading reserves), Staking (earning by holding), and Layer 2 (scaling solutions). These concepts represent the cutting edge of blockchain innovation."
        }
      },
      duration: "8 minutes"
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
        <div className="header-image">
          <img 
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756090791/BIB-starter-5_h5ootk.jpg" 
            alt="Crypto Trading Terminology"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>Crypto Trading Terminology</h1>
          <p>Master the language of cryptocurrency trading</p>
        </div>
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
            
            <div className="learning-styles">
              <div className="learning-style">
                <h3 className="style-title explain-like-5">🎈 {sections[currentSection].content.explainLike5.title}</h3>
                <p>{sections[currentSection].content.explainLike5.content}</p>
              </div>

              <div className="learning-style">
                <h3 className="style-title principle-first">🧠 {sections[currentSection].content.principleFirst.title}</h3>
                <p>{sections[currentSection].content.principleFirst.content}</p>
              </div>

              <div className="learning-style">
                <h3 className="style-title detailed">📚 {sections[currentSection].content.detailedUnderstanding.title}</h3>
                <p>{sections[currentSection].content.detailedUnderstanding.content}</p>
              </div>
            </div>
            
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

export default CryptoTerminology
