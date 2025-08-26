import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './Module.css'

const TheSecret = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])
  const [modalImage, setModalImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sections = [
    {
      title: "Introduction to The Secret",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "The Secret is like having a magic power! It's like when you really want something and you think about it all the time, and then it happens! It's like when you want a toy and you keep thinking about it, and then you get it for your birthday. The Secret is about how your thoughts can make things happen!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The Secret by Rhonda Byrne is based on the Law of Attraction - the principle that like attracts like. The book teaches that your thoughts, feelings, and beliefs create your reality. By focusing on positive thoughts and feelings, you can attract positive experiences and outcomes into your life."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Core Philosophy:</strong> The Secret reveals the Law of Attraction - the principle that your thoughts, feelings, and beliefs create your reality. What you focus on expands in your life.</p>
              <p><strong>Key Insight:</strong> Your thoughts are like magnets that attract corresponding experiences. Positive thoughts attract positive outcomes, while negative thoughts attract negative outcomes.</p>
              <p><strong>Why This Matters:</strong></p>
              <ul>
                <li>Understanding that you have control over your reality</li>
                <li>Learning to harness the power of your thoughts</li>
                <li>Developing a positive mindset for success</li>
                <li>Creating the life you truly desire</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="The Secret Overview" />
                <p className="image-caption">The Secret Overview</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "The Law of Attraction: Like Attracts Like",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "The Law of Attraction is like a magnet! Just like how magnets attract metal, your thoughts attract things that match them. If you think happy thoughts, you attract happy things. If you think about money, you attract money. It's like the universe is listening to what you're thinking about!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The Law of Attraction states that like attracts like - your thoughts, feelings, and beliefs attract corresponding experiences into your life. This principle operates on the understanding that everything in the universe is energy, and energy of the same frequency is drawn together."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Understanding the Law of Attraction:</strong></p>
              <p>The Law of Attraction is a universal principle that states that like attracts like. Your thoughts, feelings, and beliefs create a vibrational frequency that attracts matching experiences.</p>
              <p><strong>How the Law Works:</strong></p>
              <ul>
                <li><strong>Thoughts create reality:</strong> Your thoughts are the blueprint for your experiences</li>
                <li><strong>Feelings amplify thoughts:</strong> Emotions give power to your thoughts</li>
                <li><strong>Beliefs shape outcomes:</strong> What you believe determines what you receive</li>
                <li><strong>Focus determines results:</strong> What you focus on expands</li>
              </ul>
              <p><strong>Practical Applications:</strong></p>
              <ul>
                <li><strong>Positive thinking:</strong> Focus on what you want, not what you don't want</li>
                <li><strong>Gratitude practice:</strong> Appreciate what you have to attract more</li>
                <li><strong>Visualization:</strong> See yourself already having what you desire</li>
                <li><strong>Affirmations:</strong> Use positive statements to reprogram your mind</li>
              </ul>
              <p><strong>Common Misconceptions:</strong></p>
              <ul>
                <li>It's not about wishful thinking alone</li>
                <li>Action is still required to manifest desires</li>
                <li>It's not about controlling others</li>
                <li>It requires consistent practice and belief</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Law of Attraction Visualization" />
                <p className="image-caption">Law of Attraction Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "The Power of Thoughts and Feelings",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Your thoughts and feelings are like superpowers! When you think happy thoughts and feel good, it's like sending out a signal to the universe saying 'I want more happy things!' When you think about money and feel excited about having it, you're telling the universe 'I want more money!' Your thoughts and feelings are like a radio that broadcasts what you want!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Your thoughts and feelings are the primary tools for using the Law of Attraction. Thoughts create the blueprint, while feelings provide the energy and power to manifest your desires. The combination of positive thoughts and positive feelings creates the strongest attraction force."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Thoughts:</strong></p>
              <p>Your thoughts are the foundation of your reality. Every thought you have is like a seed that can grow into an experience.</p>
              <p><strong>Understanding Thought Power:</strong></p>
              <ul>
                <li><strong>Thoughts are energy:</strong> Every thought has a vibrational frequency</li>
                <li><strong>Consistent thoughts create reality:</strong> Repeated thoughts become beliefs</li>
                <li><strong>Thoughts attract circumstances:</strong> Your mental focus draws experiences</li>
                <li><strong>Thoughts influence actions:</strong> What you think determines what you do</li>
              </ul>
              <p><strong>The Power of Feelings:</strong></p>
              <ul>
                <li><strong>Feelings amplify thoughts:</strong> Emotions give power to your thoughts</li>
                <li><strong>Positive feelings attract positive outcomes:</strong> Joy, gratitude, and love attract abundance</li>
                <li><strong>Negative feelings attract negative outcomes:</strong> Fear, anger, and worry attract problems</li>
                <li><strong>Feelings are your guidance system:</strong> They tell you if you're on the right track</li>
              </ul>
              <p><strong>Combining Thoughts and Feelings:</strong></p>
              <ul>
                <li>Think about what you want with positive emotion</li>
                <li>Feel as if you already have what you desire</li>
                <li>Maintain positive thoughts and feelings consistently</li>
                <li>Use gratitude to amplify positive feelings</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Thoughts and Feelings Power" />
                <p className="image-caption">Thoughts and Feelings Power</p>
              </div>
            </>
          )
        }
      },
      duration: "14 minutes"
    },
    {
      title: "Gratitude: The Key to Attracting Abundance",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Gratitude is like saying 'thank you' to the universe! When you're grateful for what you have, it's like telling the universe 'I love this, please give me more!' It's like when you thank someone for a gift, and they want to give you more gifts because you appreciated the first one. Being grateful makes good things come to you!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Gratitude is one of the most powerful tools for using the Law of Attraction. When you express gratitude for what you have, you create a positive vibrational frequency that attracts more things to be grateful for. Gratitude shifts your focus from lack to abundance, which is essential for manifesting your desires."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Gratitude:</strong></p>
              <p>Gratitude is the practice of appreciating what you have, which creates a powerful attraction force for more abundance.</p>
              <p><strong>Why Gratitude Works:</strong></p>
              <ul>
                <li><strong>Shifts focus from lack to abundance:</strong> You see what you have instead of what you don't</li>
                <li><strong>Creates positive vibration:</strong> Gratitude has a high vibrational frequency</li>
                <li><strong>Attracts more to be grateful for:</strong> Like attracts like</li>
                <li><strong>Opens the door to receiving:</strong> You become receptive to abundance</li>
                <li><strong>Improves overall well-being:</strong> Gratitude reduces stress and increases happiness</li>
              </ul>
              <p><strong>Gratitude Practices:</strong></p>
              <ul>
                <li><strong>Daily gratitude journal:</strong> Write down 3-5 things you're grateful for each day</li>
                <li><strong>Gratitude meditation:</strong> Spend time feeling grateful for your blessings</li>
                <li><strong>Gratitude affirmations:</strong> Use statements like "I am grateful for..."</li>
                <li><strong>Express gratitude to others:</strong> Thank people for their contributions</li>
                <li><strong>Gratitude for challenges:</strong> Find the lessons in difficult situations</li>
              </ul>
              <p><strong>Gratitude for Financial Abundance:</strong></p>
              <ul>
                <li>Be grateful for the money you currently have</li>
                <li>Express gratitude for your income and opportunities</li>
                <li>Thank the universe for financial lessons learned</li>
                <li>Feel grateful for your ability to earn and save</li>
                <li>Appreciate the abundance that's already flowing to you</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Gratitude Practice" />
                <p className="image-caption">Gratitude Practice</p>
              </div>
            </>
          )
        }
      },
      duration: "13 minutes"
    },
    {
      title: "Visualization: Seeing Your Desires as Reality",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Visualization is like daydreaming, but with a purpose! It's like when you close your eyes and imagine yourself having the things you want. Like imagining yourself driving a cool car or living in a big house. When you can see it in your mind, it's like telling the universe 'this is what I want!'"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Visualization is the practice of creating detailed mental images of your desired outcomes. It's a powerful tool for the Law of Attraction because it helps you focus your thoughts and feelings on what you want to manifest. Visualization makes your desires feel real and achievable, which accelerates the manifestation process."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Visualization:</strong></p>
              <p>Visualization is creating detailed mental images of your desired outcomes. It's one of the most effective ways to use the Law of Attraction.</p>
              <p><strong>How Visualization Works:</strong></p>
              <ul>
                <li><strong>Creates neural pathways:</strong> Your brain doesn't distinguish between real and imagined experiences</li>
                <li><strong>Focuses your attention:</strong> Directs your energy toward your goals</li>
                <li><strong>Generates positive emotions:</strong> Creates feelings of having what you want</li>
                <li><strong>Strengthens belief:</strong> Makes your desires feel achievable</li>
                <li><strong>Attracts opportunities:</strong> Opens you to recognizing possibilities</li>
              </ul>
              <p><strong>Effective Visualization Techniques:</strong></p>
              <ul>
                <li><strong>Be specific:</strong> Include as many details as possible</li>
                <li><strong>Use all senses:</strong> See, hear, feel, smell, and taste your desired outcome</li>
                <li><strong>Feel the emotions:</strong> Experience the joy of having what you want</li>
                <li><strong>Practice regularly:</strong> Visualize daily for best results</li>
                <li><strong>Believe it's possible:</strong> Have faith that your vision can become reality</li>
              </ul>
              <p><strong>Visualization for Financial Success:</strong></p>
              <ul>
                <li>See yourself with the money you desire</li>
                <li>Imagine the lifestyle you want to live</li>
                <li>Visualize successful business ventures</li>
                <li>Picture yourself making wise financial decisions</li>
                <li>Feel the security and freedom of financial abundance</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Visualization Techniques" />
                <p className="image-caption">Visualization Techniques</p>
              </div>
            </>
          )
        }
      },
      duration: "16 minutes"
    },
    {
      title: "Taking Action: The Bridge Between Thought and Reality",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Taking action is like building a bridge! You can think about crossing a river all day, but you need to actually build a bridge to get across. The Law of Attraction gives you the idea and the energy, but you still need to do something to make it happen. It's like having a recipe for cookies - you need to actually bake them!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "While the Law of Attraction works through thoughts and feelings, action is the bridge that brings your desires into physical reality. The universe responds to your thoughts by providing opportunities, but you must take action to seize those opportunities. Action demonstrates your commitment and belief in your desires."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Role of Action in Manifestation:</strong></p>
              <p>Action is the physical component that bridges the gap between your thoughts and your desired reality. It's how you demonstrate your commitment to your goals.</p>
              <p><strong>How Action Supports the Law of Attraction:</strong></p>
              <ul>
                <li><strong>Shows commitment:</strong> Action demonstrates you're serious about your goals</li>
                <li><strong>Creates opportunities:</strong> Moving toward your goals opens doors</li>
                <li><strong>Strengthens belief:</strong> Taking action reinforces your faith</li>
                <li><strong>Generates momentum:</strong> Each action builds toward your desired outcome</li>
                <li><strong>Attracts resources:</strong> Action draws people and resources to help you</li>
              </ul>
              <p><strong>Types of Action to Take:</strong></p>
              <ul>
                <li><strong>Inspired action:</strong> Actions that feel right and aligned with your goals</li>
                <li><strong>Consistent action:</strong> Regular steps toward your objectives</li>
                <li><strong>Bold action:</strong> Taking risks when opportunities arise</li>
                <li><strong>Preparatory action:</strong> Getting ready for what you want to manifest</li>
                <li><strong>Maintenance action:</strong> Sustaining what you've already created</li>
              </ul>
              <p><strong>Balancing Thought and Action:</strong></p>
              <ul>
                <li>Spend time visualizing and feeling your desires</li>
                <li>Take inspired action when opportunities arise</li>
                <li>Trust your intuition about when and how to act</li>
                <li>Stay open to unexpected paths to your goals</li>
                <li>Maintain positive thoughts while taking action</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Action and Manifestation" />
                <p className="image-caption">Action and Manifestation</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
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
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163373/Booknotic_audiogram-bg_The_Secret_s6qcyj.png" 
            alt="The Secret"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>The Secret</h1>
          <p>Master the Law of Attraction to manifest your desires and create the life you want</p>
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
                  title="The Secret - Complete Book Overview"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <p className="video-caption">The Secret - Complete Book Overview</p>
              </div>
              <div className="content-image" onClick={() => openImageModal("https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163373/Booknotic_audiogram-bg_The_Secret_s6qcyj.png", "The Secret - Complete Book Overview")}>
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163373/Booknotic_audiogram-bg_The_Secret_s6qcyj.png" alt="The Secret - Complete Book Overview" />
                <p className="image-caption">The Secret - Complete Book Overview</p>
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

export default TheSecret
