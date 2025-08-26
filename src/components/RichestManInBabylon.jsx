import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './Module.css'

const RichestManInBabylon = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])
  const [modalImage, setModalImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sections = [
    {
      title: "Introduction to The Richest Man in Babylon",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "The Richest Man in Babylon is like a storybook about money! It tells the story of people who lived a long time ago in a city called Babylon, and how they learned to save money and become rich. It's like learning the secrets of money from wise people who figured out how to make their money grow!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The Richest Man in Babylon by George S. Clason presents timeless financial principles through ancient Babylonian parables. The book teaches fundamental wealth-building concepts that are as relevant today as they were in ancient times. The core principle is that wealth is built through consistent saving, wise investing, and living below your means."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Core Philosophy:</strong> The Richest Man in Babylon teaches that wealth is not about luck or inheritance, but about following simple, proven principles consistently over time.</p>
              <p><strong>Key Insight:</strong> The principles of wealth building are universal and timeless - what worked in ancient Babylon still works today.</p>
              <p><strong>Why This Matters:</strong></p>
              <ul>
                <li>Understanding that wealth building is accessible to everyone</li>
                <li>Learning time-tested financial principles</li>
                <li>Recognizing that consistency is more important than complexity</li>
                <li>Developing a systematic approach to wealth building</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Richest Man in Babylon Overview" />
                <p className="image-caption">Richest Man in Babylon Overview</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Start Thy Purse to Fattening: The First Law of Gold",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like learning to save money! Instead of spending all your money right away, you put some of it in a special place (like a piggy bank) and don't touch it. It's like when you get a cookie, but instead of eating it all at once, you save a piece for later. The more you save, the more money you'll have!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The first law of gold is to save at least 10% of everything you earn. This principle establishes the foundation for wealth building by creating a habit of saving before spending. The key is to pay yourself first - set aside your savings before paying any other expenses."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The First Law of Gold:</strong></p>
              <p>Save at least 10% of everything you earn. This is the foundation upon which all wealth building is built.</p>
              <p><strong>Why 10% Works:</strong></p>
              <ul>
                <li><strong>Manageable amount:</strong> Small enough to not disrupt your lifestyle</li>
                <li><strong>Significant impact:</strong> Large enough to create meaningful wealth over time</li>
                <li><strong>Psychological benefit:</strong> Creates a sense of progress and control</li>
                <li><strong>Compound effect:</strong> Grows exponentially over time</li>
              </ul>
              <p><strong>How to Implement the 10% Rule:</strong></p>
              <ul>
                <li>Set up automatic transfers to a savings account</li>
                <li>Treat savings as a non-negotiable expense</li>
                <li>Start immediately, regardless of your income level</li>
                <li>Increase the percentage as your income grows</li>
              </ul>
              <p><strong>Practical Steps:</strong></p>
              <ul>
                <li>Calculate 10% of your monthly income</li>
                <li>Set up automatic savings on payday</li>
                <li>Track your savings progress monthly</li>
                <li>Celebrate reaching savings milestones</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="10% Savings Rule" />
                <p className="image-caption">10% Savings Rule</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "Control Thy Expenditures: The Second Law of Gold",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like being careful with your money! It's not about being cheap, but about making smart choices. Like when you're at the store and you see something you want, but you think 'do I really need this?' It's about spending money on things that are important and not wasting it on things you don't really need!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The second law of gold is to control your expenditures and live below your means. This means spending less than you earn and avoiding unnecessary expenses. The key is distinguishing between needs and wants, and making conscious spending decisions that align with your long-term financial goals."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Second Law of Gold:</strong></p>
              <p>Control your expenditures and live below your means. This ensures you always have money to save and invest.</p>
              <p><strong>Understanding Needs vs. Wants:</strong></p>
              <ul>
                <li><strong>Needs:</strong> Essential expenses for survival and basic comfort</li>
                <li><strong>Wants:</strong> Desires that enhance life but aren't essential</li>
                <li><strong>Luxuries:</strong> Non-essential items that provide pleasure</li>
              </ul>
              <p><strong>Strategies for Controlling Expenditures:</strong></p>
              <ul>
                <li><strong>Budget creation:</strong> Plan your spending in advance</li>
                <li><strong>Expense tracking:</strong> Monitor where your money goes</li>
                <li><strong>Delayed gratification:</strong> Wait before making purchases</li>
                <li><strong>Value assessment:</strong> Consider the long-term value of purchases</li>
              </ul>
              <p><strong>Practical Budgeting Tips:</strong></p>
              <ul>
                <li>Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings</li>
                <li>Review your expenses monthly</li>
                <li>Look for ways to reduce recurring expenses</li>
                <li>Set spending limits for different categories</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Expense Control Strategies" />
                <p className="image-caption">Expense Control Strategies</p>
              </div>
            </>
          )
        }
      },
      duration: "14 minutes"
    },
    {
      title: "Make Thy Gold Multiply: The Third Law of Gold",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like making your money work for you! Instead of just keeping your money in a piggy bank where it doesn't grow, you put it somewhere where it can make more money. It's like planting seeds - you put a little seed in the ground, and it grows into a big plant that gives you more seeds!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The third law of gold is to invest your savings wisely to make your money work for you. This involves putting your money into investments that will generate returns over time. The key is to understand different investment options and choose those that align with your risk tolerance and financial goals."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Third Law of Gold:</strong></p>
              <p>Make your gold multiply by investing your savings wisely. This is how you create wealth beyond what you can earn through work alone.</p>
              <p><strong>Understanding Investment Options:</strong></p>
              <ul>
                <li><strong>Stocks:</strong> Ownership in companies with potential for growth</li>
                <li><strong>Bonds:</strong> Lending money to governments or companies</li>
                <li><strong>Real estate:</strong> Property investments that can appreciate</li>
                <li><strong>Index funds:</strong> Diversified investments in multiple companies</li>
                <li><strong>Cryptocurrency:</strong> Digital assets with growth potential</li>
              </ul>
              <p><strong>Investment Principles:</strong></p>
              <ul>
                <li><strong>Diversification:</strong> Spread your money across different investments</li>
                <li><strong>Long-term perspective:</strong> Focus on long-term growth, not short-term gains</li>
                <li><strong>Risk management:</strong> Only invest what you can afford to lose</li>
                <li><strong>Regular investing:</strong> Invest consistently over time</li>
              </ul>
              <p><strong>Getting Started with Investing:</strong></p>
              <ul>
                <li>Start with index funds for diversification</li>
                <li>Use dollar-cost averaging to reduce risk</li>
                <li>Reinvest dividends and returns</li>
                <li>Regularly review and rebalance your portfolio</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Investment Growth Chart" />
                <p className="image-caption">Investment Growth Chart</p>
              </div>
            </>
          )
        }
      },
      duration: "16 minutes"
    },
    {
      title: "Guard Thy Treasures from Loss: The Fourth Law of Gold",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like protecting your money! It's like when you have a special toy and you make sure to keep it safe so it doesn't get broken or lost. You don't put all your money in one place that might be risky, and you don't give it to people who might not give it back!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The fourth law of gold is to protect your wealth from loss through careful risk management and due diligence. This involves avoiding high-risk investments, being cautious about lending money, and ensuring your investments are properly diversified. The goal is to preserve capital while still earning returns."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Fourth Law of Gold:</strong></p>
              <p>Guard your treasures from loss by being careful with your investments and avoiding unnecessary risks.</p>
              <p><strong>Common Sources of Financial Loss:</strong></p>
              <ul>
                <li><strong>High-risk investments:</strong> Investments with uncertain returns</li>
                <li><strong>Lending to unreliable people:</strong> Giving money to those who can't repay</li>
                <li><strong>Lack of diversification:</strong> Putting all money in one investment</li>
                <li><strong>Emotional decisions:</strong> Making investment choices based on fear or greed</li>
                <li><strong>Fraud and scams:</strong> Falling for dishonest investment schemes</li>
              </ul>
              <p><strong>Protection Strategies:</strong></p>
              <ul>
                <li><strong>Diversification:</strong> Spread investments across different assets</li>
                <li><strong>Due diligence:</strong> Research investments thoroughly</li>
                <li><strong>Risk assessment:</strong> Understand potential losses before investing</li>
                <li><strong>Professional advice:</strong> Consult financial advisors when needed</li>
                <li><strong>Insurance:</strong> Protect against unexpected losses</li>
              </ul>
              <p><strong>Red Flags to Avoid:</strong></p>
              <ul>
                <li>Promises of guaranteed high returns</li>
                <li>Pressure to invest quickly</li>
                <li>Complex investments you don't understand</li>
                <li>Unregistered investment opportunities</li>
                <li>Requests for personal financial information</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Wealth Protection Strategies" />
                <p className="image-caption">Wealth Protection Strategies</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "Make of Thy Dwelling a Profitable Investment: The Fifth Law of Gold",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like making your home work for you! Instead of just living in a house that costs you money, you can make your home an investment that makes you money. It's like having a lemonade stand in your front yard - your house not only gives you a place to live, but it also helps you make money!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The fifth law of gold is to make your home a profitable investment. This involves choosing a home that will appreciate in value over time and potentially generate income. The key is to view your home not just as a place to live, but as an investment that can contribute to your wealth building."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Fifth Law of Gold:</strong></p>
              <p>Make your dwelling a profitable investment by choosing a home that will appreciate in value and potentially generate income.</p>
              <p><strong>Ways to Make Your Home Profitable:</strong></p>
              <ul>
                <li><strong>Location selection:</strong> Choose areas with growth potential</li>
                <li><strong>Property improvements:</strong> Make upgrades that increase value</li>
                <li><strong>Rental income:</strong> Rent out rooms or the entire property</li>
                <li><strong>Home equity:</strong> Build equity through mortgage payments</li>
                <li><strong>Tax benefits:</strong> Take advantage of homeownership tax deductions</li>
              </ul>
              <p><strong>Home Investment Strategies:</strong></p>
              <ul>
                <li><strong>Buy below market value:</strong> Look for properties that need work</li>
                <li><strong>Add value through improvements:</strong> Renovate strategically</li>
                <li><strong>Consider rental potential:</strong> Choose properties that could generate income</li>
                <li><strong>Focus on location:</strong> Buy in areas with strong fundamentals</li>
                <li><strong>Think long-term:</strong> Plan to hold the property for appreciation</li>
              </ul>
              <p><strong>Rental Property Considerations:</strong></p>
              <ul>
                <li>Calculate potential rental income vs. expenses</li>
                <li>Consider property management costs</li>
                <li>Research local rental market conditions</li>
                <li>Understand landlord responsibilities</li>
                <li>Plan for maintenance and repairs</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Home Investment Strategies" />
                <p className="image-caption">Home Investment Strategies</p>
              </div>
            </>
          )
        }
      },
      duration: "13 minutes"
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
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163374/Booknotic_audiogram-bg_TheRichestManInBabylon_caoh22.png" 
            alt="The Richest Man in Babylon"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>The Richest Man in Babylon</h1>
          <p>Learn timeless wealth-building principles through ancient Babylonian wisdom</p>
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
                  title="The Richest Man in Babylon - Complete Book Overview"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <p className="video-caption">The Richest Man in Babylon - Complete Book Overview</p>
              </div>
              <div className="content-image" onClick={() => openImageModal("https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163374/Booknotic_audiogram-bg_TheRichestManInBabylon_caoh22.png", "The Richest Man in Babylon - Complete Book Overview")}>
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163374/Booknotic_audiogram-bg_TheRichestManInBabylon_caoh22.png" alt="The Richest Man in Babylon - Complete Book Overview" />
                <p className="image-caption">The Richest Man in Babylon - Complete Book Overview</p>
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

export default RichestManInBabylon
