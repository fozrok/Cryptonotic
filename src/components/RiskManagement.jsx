import React, { useState } from 'react'
import './Module.css'

const RiskManagement = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])

  const sections = [
    {
      title: "Introduction to Risk Management",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Think of risk management like wearing a helmet when you ride your bike! Just like a helmet protects your head if you fall, risk management protects your money if your trades don't go as planned. It's like having a safety net - you hope you don't need it, but you're glad it's there!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Risk management is the foundation of successful trading. The core principle is to protect your capital first, profits second. This means never risking more than you can afford to lose and always having a plan for when things go wrong."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Risk management encompasses position sizing, stop losses, portfolio diversification, and emotional control. It's about creating a systematic approach to protect your trading capital while allowing profitable trades to run. The goal is to survive losing streaks and compound winning streaks."
        }
      },
      duration: "5 minutes"
    },
    {
      title: "The Risk Pyramid",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Imagine building a tower with blocks! The bottom blocks (savings) are the biggest and strongest - they keep your tower safe. The middle blocks (investments) are medium-sized. The top blocks (trading) are the smallest and riskiest. If the top falls, your strong bottom keeps everything safe!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The risk pyramid illustrates how to allocate capital based on risk levels. The base should be the largest portion (low-risk savings), the middle should be moderate (diversified investments), and the top should be the smallest (high-risk trading). This structure ensures capital preservation."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "The risk pyramid has three levels: Base (60-70% in low-risk savings and bonds), Middle (20-30% in diversified investments like index funds), and Top (5-10% in high-risk trading). This allocation ensures that even if trading losses occur, your overall financial security remains intact."
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Position Sizing Calculator",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Think of position sizing like deciding how many cookies to put on your plate! If you have 100 cookies total, you wouldn't put 50 on your plate at once - that's too risky! Instead, you'd put maybe 5-10 cookies, so if you drop your plate, you don't lose everything!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Position sizing determines how much capital to risk on each trade. The 2% rule states that you should never risk more than 2% of your total account on any single trade. This ensures that even a series of losses won't significantly impact your overall capital."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Position size = (Account size × Risk percentage) ÷ (Entry price - Stop loss price). For example, with a $10,000 account risking 2% ($200), if your stop loss is $1 away from entry, your position size would be 200 shares. This creates a systematic approach to risk management."
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Stop Loss Strategies",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A stop loss is like setting an alarm clock! If you set your alarm for 7 AM, you know you'll wake up at that time no matter what. A stop loss works the same way - if the price hits your stop loss, you automatically sell, no matter how you feel about it!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Stop losses are automatic exit points that limit potential losses. They remove emotion from trading decisions and ensure that no single trade can cause catastrophic damage to your account. The key is placing them at logical levels where the trade thesis is invalidated."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Types of stop losses include: Fixed percentage stops (e.g., 5% below entry), Technical stops (below support levels), Trailing stops (following price movement), and Time-based stops (exiting after a certain period). The best approach combines technical analysis with risk management principles."
        }
      },
      duration: "7 minutes"
    },
    {
      title: "Emotional Management",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Trading emotions are like having a pet that gets excited! When you're winning, your pet gets super happy and wants to play more. When you're losing, your pet gets scared and wants to hide. The trick is to be the calm owner who doesn't let the pet's emotions control your decisions!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Emotional management is about maintaining discipline and objectivity in trading decisions. Fear and greed are the two primary emotions that can derail trading success. The solution is to have a written trading plan and stick to it regardless of emotional impulses."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "Common emotional traps include: FOMO (fear of missing out), revenge trading after losses, overconfidence after wins, and paralysis by analysis. Techniques to manage emotions include: keeping a trading journal, taking breaks after losses, setting daily loss limits, and using automated trading systems."
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Golden Rules of Risk Management",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "These rules are like the safety rules your parents taught you! Always look both ways before crossing the street (check the market), never run with scissors (don't risk too much), and always wear your seatbelt (use stop losses). These rules keep you safe!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The golden rules of risk management are fundamental principles that, when followed consistently, protect your trading capital and improve long-term success. These rules are based on the principle that capital preservation is more important than maximizing profits."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: "The golden rules include: 1) Never risk more than 2% per trade, 2) Always use stop losses, 3) Don't trade with money you can't afford to lose, 4) Keep a trading journal, 5) Take breaks after consecutive losses, 6) Diversify your trading strategies, 7) Never chase losses, and 8) Have a written trading plan."
        }
      },
      duration: "7 minutes"
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
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756090791/BIB-starter-1_mslud2.jpg" 
            alt="Risk Management Essentials"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>Risk Management Essentials</h1>
          <p>Master the art of protecting your crypto investments</p>
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

export default RiskManagement
