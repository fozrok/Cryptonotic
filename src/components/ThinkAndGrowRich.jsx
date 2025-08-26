import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './Module.css'

const ThinkAndGrowRich = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])
  const [modalImage, setModalImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sections = [
    {
      title: "Introduction to Think & Grow Rich",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Think & Grow Rich is like having a magic recipe for success! Just like how you need the right ingredients to make cookies, you need the right thoughts and beliefs to become successful. It's not about being lucky - it's about thinking the right way and believing in yourself!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Think & Grow Rich by Napoleon Hill is based on the principle that thoughts become things. The book outlines 13 principles for achieving success, emphasizing that wealth begins in the mind through desire, faith, and persistence. Success is not about luck but about developing the right mindset and following proven principles."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Core Philosophy:</strong> Think & Grow Rich is based on the principle that thoughts become things. Napoleon Hill studied successful people for over 20 years to identify the common principles that lead to wealth and success.</p>
              <p><strong>Key Insight:</strong> Success is not about luck, education, or circumstances, but about developing the right mindset and following proven principles consistently.</p>
              <p><strong>Why This Matters:</strong></p>
              <ul>
                <li>Understanding that success starts in the mind</li>
                <li>Learning the proven principles that successful people follow</li>
                <li>Developing the mindset needed for wealth creation</li>
                <li>Recognizing that anyone can achieve success with the right approach</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Think & Grow Rich Overview" />
                <p className="image-caption">Think & Grow Rich Overview</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Desire: The Starting Point of All Achievement",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Desire is like really, really wanting something! It's not just thinking 'it would be nice to have that' - it's feeling it deep in your heart, like when you really want a special toy for your birthday. When you want something that much, you'll do anything to get it!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Desire is the first and most important principle. It's not a wish or a hope, but a burning, intense craving that becomes an obsession. This desire must be definite, specific, and backed by a plan. Without a strong enough desire, no other principle can work effectively."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Understanding True Desire:</strong></p>
              <p>Desire is not a casual wish or hope, but a burning, intense craving that becomes an obsession. It's the emotional fuel that drives all achievement.</p>
              <p><strong>Characteristics of Powerful Desire:</strong></p>
              <ul>
                <li><strong>Definite and specific:</strong> You know exactly what you want</li>
                <li><strong>Emotionally charged:</strong> You feel it deeply in your heart</li>
                <li><strong>Persistent:</strong> It doesn't fade with time or obstacles</li>
                <li><strong>Action-oriented:</strong> It drives you to take consistent action</li>
              </ul>
              <p><strong>How to Develop Powerful Desire:</strong></p>
              <ul>
                <li>Write down exactly what you want in specific terms</li>
                <li>Visualize yourself already having it</li>
                <li>Read your desire aloud twice daily</li>
                <li>Create a plan to achieve it</li>
                <li>Surround yourself with reminders of your goal</li>
              </ul>
              <p><strong>Practical Application:</strong></p>
              <ul>
                <li>Define your financial goals in specific amounts</li>
                <li>Set deadlines for achieving them</li>
                <li>Create a detailed plan of action</li>
                <li>Commit to reviewing your goals daily</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Desire Visualization" />
                <p className="image-caption">Desire Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "Faith: Visualizing and Believing in the Attainment of Desire",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Faith is like believing in magic! When you really believe something will happen, it's like you can see it in your mind, even before it happens. It's like when you believe you'll get an A on your test, and you study really hard because you know you can do it!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Faith is the second principle and involves developing an unshakeable belief in your ability to achieve your desire. This faith is developed through autosuggestion - repeatedly affirming your goals to yourself until they become part of your subconscious mind. Faith transforms desire into reality."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Faith:</strong></p>
              <p>Faith is not religious belief, but an unshakeable confidence in your ability to achieve your goals. It's the bridge between desire and reality.</p>
              <p><strong>How Faith Works:</strong></p>
              <ul>
                <li><strong>Autosuggestion:</strong> Repeatedly affirming your goals to yourself</li>
                <li><strong>Visualization:</strong> Seeing yourself already achieving your goals</li>
                <li><strong>Emotional intensity:</strong> Feeling the emotions of success</li>
                <li><strong>Subconscious programming:</strong> Training your mind to believe</li>
              </ul>
              <p><strong>Developing Unshakeable Faith:</strong></p>
              <ul>
                <li>Write your goals in present tense as if already achieved</li>
                <li>Read your affirmations aloud with emotion twice daily</li>
                <li>Visualize your success in vivid detail</li>
                <li>Act as if you already have what you desire</li>
                <li>Surround yourself with positive influences</li>
              </ul>
              <p><strong>Practical Techniques:</strong></p>
              <ul>
                <li>Create a vision board with your goals</li>
                <li>Use positive affirmations daily</li>
                <li>Practice meditation and visualization</li>
                <li>Study successful people who achieved similar goals</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Faith and Belief Visualization" />
                <p className="image-caption">Faith and Belief Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "Autosuggestion: The Medium for Influencing the Subconscious Mind",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Autosuggestion is like talking to yourself in a special way! It's like when you keep telling yourself 'I can do this, I can do this' until you really believe it. It's like programming your brain like a computer - you put in good thoughts, and good things come out!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Autosuggestion is the process of influencing your subconscious mind through repeated affirmations and self-talk. It's the method by which you can control your thoughts and emotions, programming your mind for success. The subconscious mind accepts and acts upon any thought that is repeated with emotion and conviction."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Understanding Autosuggestion:</strong></p>
              <p>Autosuggestion is the process of deliberately influencing your subconscious mind through repeated thoughts, words, and affirmations. It's how you program your mind for success.</p>
              <p><strong>How Autosuggestion Works:</strong></p>
              <ul>
                <li><strong>Repetition:</strong> The subconscious mind learns through repetition</li>
                <li><strong>Emotion:</strong> Emotional intensity makes suggestions more powerful</li>
                <li><strong>Belief:</strong> You must believe what you're telling yourself</li>
                <li><strong>Consistency:</strong> Regular practice is essential for results</li>
              </ul>
              <p><strong>Effective Autosuggestion Techniques:</strong></p>
              <ul>
                <li><strong>Morning and evening practice:</strong> Read affirmations twice daily</li>
                <li><strong>Present tense:</strong> State goals as if already achieved</li>
                <li><strong>Emotional delivery:</strong> Feel the emotions of success</li>
                <li><strong>Specific language:</strong> Use clear, specific statements</li>
                <li><strong>Quiet environment:</strong> Practice in a peaceful setting</li>
              </ul>
              <p><strong>Sample Affirmations:</strong></p>
              <ul>
                <li>"I am financially independent and wealthy"</li>
                <li>"I attract money and opportunities easily"</li>
                <li>"I am confident and successful in all my endeavors"</li>
                <li>"I deserve abundance and prosperity"</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Autosuggestion Process" />
                <p className="image-caption">Autosuggestion Process</p>
              </div>
            </>
          )
        }
      },
      duration: "14 minutes"
    },
    {
      title: "Specialized Knowledge: Personal Experiences and Observations",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Specialized knowledge is like being really good at one specific thing! It's not about knowing a little bit about everything, but knowing a lot about the thing that will help you succeed. Like if you want to be a great chef, you need to know everything about cooking, not just a little bit about everything!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Specialized knowledge is knowledge that is organized and intelligently directed toward a specific goal. It's not general knowledge, but specific expertise in the area that will help you achieve your desire. This knowledge can be acquired through education, experience, or association with others who have it."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Understanding Specialized Knowledge:</strong></p>
              <p>Specialized knowledge is not general education, but specific expertise that directly relates to your goals. It's the practical knowledge needed to achieve your desires.</p>
              <p><strong>Types of Specialized Knowledge:</strong></p>
              <ul>
                <li><strong>Technical skills:</strong> Specific abilities needed for your field</li>
                <li><strong>Industry knowledge:</strong> Understanding your chosen industry</li>
                <li><strong>Market knowledge:</strong> Knowing your customers and competition</li>
                <li><strong>Financial knowledge:</strong> Understanding money management</li>
              </ul>
              <p><strong>How to Acquire Specialized Knowledge:</strong></p>
              <ul>
                <li><strong>Formal education:</strong> College, courses, certifications</li>
                <li><strong>Self-study:</strong> Books, online courses, research</li>
                <li><strong>Experience:</strong> Learning by doing</li>
                <li><strong>Mentorship:</strong> Learning from experts</li>
                <li><strong>Networking:</strong> Learning from peers and colleagues</li>
              </ul>
              <p><strong>Applying Knowledge Effectively:</strong></p>
              <ul>
                <li>Focus on knowledge that directly serves your goals</li>
                <li>Continuously update and expand your expertise</li>
                <li>Apply knowledge through action and practice</li>
                <li>Share knowledge to reinforce your own learning</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Specialized Knowledge Framework" />
                <p className="image-caption">Specialized Knowledge Framework</p>
              </div>
            </>
          )
        }
      },
      duration: "13 minutes"
    },
    {
      title: "Persistence: The Sustained Effort Necessary to Induce Faith",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Persistence is like not giving up, even when things are hard! It's like when you're learning to ride a bike and you fall down, but you keep getting back up and trying again. It's not about being perfect the first time - it's about keeping going until you succeed!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Persistence is the sustained effort necessary to induce faith and achieve your goals. It's the ability to continue working toward your desire despite obstacles, setbacks, and temporary failures. Persistence is developed through having a definite purpose, a burning desire, and the ability to bounce back from adversity."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>The Power of Persistence:</strong></p>
              <p>Persistence is not about never failing, but about never giving up. It's the quality that separates successful people from those who quit when faced with obstacles.</p>
              <p><strong>Why Most People Lack Persistence:</strong></p>
              <ul>
                <li><strong>Lack of definite purpose:</strong> Not knowing exactly what they want</li>
                <li><strong>Weak desire:</strong> Not wanting it badly enough</li>
                <li><strong>Procrastination:</strong> Putting off important tasks</li>
                <li><strong>Lack of self-discipline:</strong> Inability to control impulses</li>
                <li><strong>Fear of criticism:</strong> Worrying about what others think</li>
              </ul>
              <p><strong>Developing Unwavering Persistence:</strong></p>
              <ul>
                <li><strong>Define your purpose:</strong> Know exactly what you want to achieve</li>
                <li><strong>Strengthen your desire:</strong> Make your goal an obsession</li>
                <li><strong>Create a plan:</strong> Have a clear roadmap to follow</li>
                <li><strong>Build self-discipline:</strong> Practice controlling your actions</li>
                <li><strong>Learn from setbacks:</strong> Use failures as learning opportunities</li>
              </ul>
              <p><strong>Persistence Strategies:</strong></p>
              <ul>
                <li>Break large goals into smaller, manageable tasks</li>
                <li>Track your progress and celebrate small wins</li>
                <li>Surround yourself with supportive people</li>
                <li>Visualize your success regularly</li>
                <li>Develop a daily routine that supports your goals</li>
              </ul>

              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Persistence Journey" />
                <p className="image-caption">Persistence Journey</p>
              </div>
            </>
          )
        }
      },
      duration: "16 minutes"
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
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756163369/Booknotic_audiogram-bg_think-gorw-rich_beqb2s.jpg" 
            alt="Think & Grow Rich"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>Think & Grow Rich</h1>
          <p>Master the principles of success and wealth creation through mindset and action</p>
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
                  title="Think & Grow Rich - Complete Book Overview"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <p className="video-caption">Think & Grow Rich - Complete Book Overview</p>
              </div>
              <div className="content-image" onClick={() => openImageModal("https://res.cloudinary.com/dhxriuzu5/image/upload/v1756162471/Think_Grow_RichV2_iup63o.jpg", "Think & Grow Rich - Complete Book Overview")}>
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756162471/Think_Grow_RichV2_iup63o.jpg" alt="Think & Grow Rich - Complete Book Overview" />
                <p className="image-caption">Think & Grow Rich - Complete Book Overview</p>
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

export default ThinkAndGrowRich
