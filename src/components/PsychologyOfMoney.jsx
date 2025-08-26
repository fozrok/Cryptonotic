import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './Module.css'

const PsychologyOfMoney = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])
  const [modalImage, setModalImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sections = [
    {
      title: "Introduction to The Psychology of Money",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Money is like a game that everyone plays, but not everyone knows the rules! Some people think money is just about being smart with numbers, but it's really about how we think and feel about money. It's like learning to ride a bike - it's not just about the bike, it's about how you think about falling and getting back up!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The Psychology of Money explores how personal history, worldview, and unique experiences shape financial decisions more than mathematical calculations. Understanding that financial success is not about intelligence but about behavior, psychology, and personal history is the foundation for building wealth."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Core Concept:</strong> The Psychology of Money by Morgan Housel reveals that financial success is not about intelligence, but about behavior, psychology, and personal history.</p>
              <p><strong>Key Insight:</strong> Your financial decisions are shaped by your personal history, worldview, and unique experiences more than by mathematical calculations.</p>
              <p><strong>Why This Matters:</strong></p>
              <ul>
                <li>Understanding your money psychology helps you make better financial decisions</li>
                <li>Recognizing behavioral patterns can prevent costly mistakes</li>
                <li>Building wealth requires psychological discipline, not just mathematical skill</li>
              </ul>

            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "The Role of Luck and Risk",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Imagine you and your friend both plant seeds in your gardens. Your seed grows into a big tree, but your friend's seed doesn't grow at all. Was it because you're better at gardening, or was it just luck? Sometimes good things happen because we're lucky, and bad things happen because we're unlucky - not because we're smart or stupid!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Luck and risk are two sides of the same coin in financial outcomes. Success often involves significant luck, while failure often involves significant risk. Understanding this helps separate skill from luck and prevents overconfidence or unnecessary self-blame."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Understanding Luck vs. Skill:</strong></p>
              <p>Financial outcomes are often influenced by factors beyond our control. What we call 'skill' is often a combination of preparation and luck.</p>
              <p><strong>Key Principles:</strong></p>
              <ul>
                <li><strong>Success involves luck:</strong> Many successful people benefited from timing, circumstances, or random events</li>
                <li><strong>Failure involves risk:</strong> Bad outcomes often result from taking calculated risks that didn't pay off</li>
                <li><strong>Hindsight bias:</strong> We tend to attribute success to skill and failure to bad luck</li>
              </ul>
              <p><strong>Practical Applications:</strong></p>
              <ul>
                <li>Don't judge others' success or failure too harshly</li>
                <li>Recognize the role of luck in your own success</li>
                <li>Focus on what you can control: your behavior and decisions</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756162472/VisualSummary_The_Psychology_of_Money_x1gfcx.jpg" alt="Psychology of Money Visual Summary" />
                <p className="image-caption">Psychology of Money Visual Summary</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Never Enough: The Psychology of Wealth",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Have you ever wanted a toy, and when you got it, you were happy for a little while, but then you wanted another toy? That's what happens with money too! Some people keep wanting more and more money, but they're never happy with what they have. It's like having a hole that can never be filled!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The concept of 'enough' is psychological, not mathematical. Many people with substantial wealth continue to pursue more money, driven by social comparison, insecurity, or the fear of losing what they have. Understanding what constitutes 'enough' is crucial for financial contentment."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Psychology of 'Enough':</strong></p>
              <p>Financial contentment is not about reaching a specific dollar amount, but about understanding what truly satisfies you.</p>
              <p><strong>Why People Never Feel They Have Enough:</strong></p>
              <ul>
                <li><strong>Social comparison:</strong> Comparing yourself to others who have more</li>
                <li><strong>Insecurity:</strong> Fear of losing what you have</li>
                <li><strong>Moving goalposts:</strong> Goals that keep shifting as you achieve them</li>
                <li><strong>Lifestyle inflation:</strong> Spending more as you earn more</li>
              </ul>
              <p><strong>Finding Your 'Enough':</strong></p>
              <ul>
                <li>Define what financial security means to you</li>
                <li>Separate needs from wants</li>
                <li>Focus on experiences over possessions</li>
                <li>Practice gratitude for what you have</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Enough Concept Visualization" />
                <p className="image-caption">Enough Concept Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "Getting Wealthy vs. Staying Wealthy",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Getting money is like building a sandcastle - it takes time and effort. But keeping money is like protecting that sandcastle from the waves! Some people are really good at building sandcastles (making money) but not so good at protecting them (keeping money). You need both skills to be successful!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Getting wealthy and staying wealthy require different skills and mindsets. Getting wealthy often involves taking risks, being optimistic, and making bold moves. Staying wealthy requires humility, frugality, and fear of losing what you have. Many people are good at one but not the other."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Two Different Skills:</strong></p>
              <p>Building wealth and preserving wealth are fundamentally different challenges that require different approaches.</p>
              <p><strong>Getting Wealthy Requires:</strong></p>
              <ul>
                <li><strong>Optimism:</strong> Believing in future possibilities</li>
                <li><strong>Risk-taking:</strong> Willingness to take calculated risks</li>
                <li><strong>Boldness:</strong> Making significant moves when opportunities arise</li>
                <li><strong>Confidence:</strong> Trusting in your abilities and decisions</li>
              </ul>
              <p><strong>Staying Wealthy Requires:</strong></p>
              <ul>
                <li><strong>Humility:</strong> Recognizing the role of luck in success</li>
                <li><strong>Frugality:</strong> Living below your means</li>
                <li><strong>Fear:</strong> Healthy concern about losing what you have</li>
                <li><strong>Patience:</strong> Avoiding the temptation to make big bets</li>
              </ul>
              <p><strong>Practical Applications:</strong></p>
              <ul>
                <li>Develop both skill sets as you build wealth</li>
                <li>Recognize when to switch from wealth-building to wealth-preservation mode</li>
                <li>Learn from people who have successfully maintained wealth</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Wealth Building vs Preservation" />
                <p className="image-caption">Wealth Building vs Preservation</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "Tails, You Win: The Power of Compounding",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Imagine you have a magic penny that doubles every day. On day 1, you have 1 penny. On day 2, you have 2 pennies. On day 3, you have 4 pennies. It doesn't seem like much at first, but after 30 days, you have millions of pennies! That's the magic of compounding - small things become huge over time!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Compounding is the most powerful force in finance, where small gains build upon themselves over time to create exponential growth. The key is time - the longer you let your money compound, the more powerful the effect becomes. Most people underestimate the power of compounding because it's not intuitive."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Compounding:</strong></p>
              <p>Compounding is when your returns generate additional returns, creating exponential growth over time.</p>
              <p><strong>Why Compounding is So Powerful:</strong></p>
              <ul>
                <li><strong>Exponential growth:</strong> Small gains build upon themselves</li>
                <li><strong>Time is the key:</strong> The longer you wait, the more powerful the effect</li>
                <li><strong>Counterintuitive:</strong> Most people underestimate its power</li>
                <li><strong>Universal application:</strong> Works for money, knowledge, and skills</li>
              </ul>
              <p><strong>Practical Examples:</strong></p>
              <ul>
                <li><strong>Investing:</strong> $10,000 invested at 7% for 30 years becomes $76,123</li>
                <li><strong>Knowledge:</strong> Learning compounds as new knowledge builds on existing knowledge</li>
                <li><strong>Skills:</strong> Practice compounds as each skill improvement makes learning easier</li>
              </ul>
              <p><strong>How to Harness Compounding:</strong></p>
              <ul>
                <li>Start early to maximize time</li>
                <li>Be consistent with your efforts</li>
                <li>Focus on long-term thinking</li>
                <li>Don't interrupt the compounding process</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Compounding Growth Chart" />
                <p className="image-caption">Compounding Growth Chart</p>
              </div>
            </>
          )
        }
      },
      duration: "14 minutes"
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

  const openImageModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt })
    setIsModalOpen(true)
  }

  const closeImageModal = () => {
    setIsModalOpen(false)
    setModalImage(null)
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <div className="header-image">
          <img 
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163370/Booknotic_audiogram-bg_PsychologyOfMoney_lcgktl.jpg" 
            alt="The Psychology of Money"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>The Psychology of Money</h1>
          <p>Understanding the psychology behind financial decisions and wealth building</p>
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
                <span className="duration">{section.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="section-content">
            <h2>{sections[currentSection].title}</h2>
            
            <div className="section-media">
              <div className="content-video">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/TJDcGv9OH4Q" 
                  title="The Psychology of Money - Complete Book Overview"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <p className="video-caption">The Psychology of Money - Complete Book Overview</p>
              </div>
              <div className="content-image" onClick={() => openImageModal("https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163370/Booknotic_audiogram-bg_PsychologyOfMoney_lcgktl.jpg", "The Psychology of Money - Complete Book Overview")}>
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163370/Booknotic_audiogram-bg_PsychologyOfMoney_lcgktl.jpg" alt="The Psychology of Money - Complete Book Overview" />
                <p className="image-caption">The Psychology of Money - Complete Book Overview</p>
              </div>
            </div>

            <div className="learning-styles">
              <div className="learning-style">
                <h3 className="style-title">{sections[currentSection].content.explainLike5.title}</h3>
                <p>{sections[currentSection].content.explainLike5.content}</p>
              </div>

              <div className="learning-style">
                <h3 className="style-title">{sections[currentSection].content.principleFirst.title}</h3>
                <p>{sections[currentSection].content.principleFirst.content}</p>
              </div>

              <div className="learning-style">
                <h3 className="style-title">{sections[currentSection].content.detailedUnderstanding.title}</h3>
                {sections[currentSection].content.detailedUnderstanding.content}
              </div>
            </div>

            <div className="section-actions">
              <button 
                className="complete-btn"
                onClick={() => markAsComplete(currentSection)}
                disabled={completedSections.includes(currentSection)}
              >
                {completedSections.includes(currentSection) ? '✓ Completed' : 'Mark as Complete'}
              </button>
            </div>

            <div className="navigation">
              <button 
                className="nav-btn"
                onClick={prevSection}
                disabled={currentSection === 0}
              >
                ← Previous
              </button>
              <button 
                className="nav-btn"
                onClick={nextSection}
                disabled={currentSection === sections.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ImageModal 
        isOpen={isModalOpen}
        imageSrc={modalImage?.src}
        imageAlt={modalImage?.alt}
        onClose={closeImageModal}
      />
    </div>
  )
}

export default PsychologyOfMoney
