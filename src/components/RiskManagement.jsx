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
          content: (
            <>
              <p>Welcome to your essential guide to risk management in crypto trading! If you're feeling nervous about putting your hard-earned money into cryptocurrency, that's actually a healthy sign – it means you understand that there are risks involved. As a busy mum considering crypto trading, your cautious approach is exactly what will help you succeed in the long run.</p>
              <p>Risk management isn't about avoiding all risks – it's about understanding them, preparing for them, and making sure that even if things don't go as planned, you and your family will be okay. Think of it like wearing a seatbelt when driving: you don't expect to crash, but you take precautions just in case.</p>
              <h3>Why Risk Management is Your Best Friend</h3>
              <p>Many people get excited about the potential profits in crypto and forget about the risks. But here's the truth: successful traders don't just focus on making money – they focus on not losing money. As the famous saying goes, "Rule #1: Never lose money. Rule #2: Never forget rule #1."</p>
              <p>For you as a mum, this is especially important because:</p>
              <ul>
                <li><strong>Family Security:</strong> You need to protect your family's financial stability</li>
                <li><strong>Peace of Mind:</strong> Good risk management helps you sleep better at night</li>
                <li><strong>Sustainable Growth:</strong> It allows you to stay in the game long term</li>
                <li><strong>Confidence Building:</strong> Knowing you're protected helps you make better decisions</li>
              </ul>
              <h3>What You'll Learn</h3>
              <p>By the end of this guide, you will:</p>
              <ul>
                <li>Understand the different types of risks in crypto trading</li>
                <li>Know how to size your positions appropriately</li>
                <li>Learn to set protective stop losses and profit targets</li>
                <li>Develop strategies to manage your emotions while trading</li>
                <li>Create a personalized risk management plan</li>
                <li>Feel confident and prepared for your crypto journey</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Risk Management Overview" />
                <p className="image-caption">Risk Management Overview</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Understanding Risk in Crypto Trading",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Crypto trading risks are like the different ways you could get hurt while playing! There's the risk of falling (market risk), the risk of someone stealing your toys (security risk), the risk of the playground being closed (technology risk), and the risk of getting too excited and making bad choices (emotional risk). Understanding these risks helps you play safely!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Risk in crypto trading is the possibility that your investment will lose value or that something unexpected will happen that affects your ability to trade successfully. Unlike traditional investments, crypto comes with unique risks that you need to understand and prepare for."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>What is Risk in Crypto Trading?</h3>
              <p>Risk in crypto trading is the possibility that your investment will lose value or that something unexpected will happen that affects your ability to trade successfully. Unlike traditional investments, crypto comes with unique risks that you need to understand and prepare for.</p>
              <h3>Types of Risks You'll Encounter</h3>
              <h4>1. Market Risk (Price Volatility)</h4>
              <ul>
                <li><strong>What it is:</strong> The risk that crypto prices will move against your position</li>
                <li><strong>Why it matters:</strong> Crypto prices can change dramatically in short periods</li>
                <li><strong>How to manage:</strong> Never invest more than you can afford to lose, use stop losses</li>
              </ul>
              <h4>2. Liquidity Risk</h4>
              <ul>
                <li><strong>What it is:</strong> The risk that you won't be able to buy or sell when you want to</li>
                <li><strong>Why it matters:</strong> Some cryptocurrencies have low trading volume</li>
                <li><strong>Example:</strong> Trying to sell a small altcoin but finding no buyers</li>
                <li><strong>How to manage:</strong> Stick to well-established cryptocurrencies with high volume</li>
              </ul>
              <h4>3. Technology Risk</h4>
              <ul>
                <li><strong>What it is:</strong> The risk of technical problems with exchanges, wallets, or blockchain networks</li>
                <li><strong>Why it matters:</strong> Technical issues can prevent you from accessing your crypto</li>
                <li><strong>Example:</strong> An exchange going down during a major price movement</li>
                <li><strong>How to manage:</strong> Use reputable platforms, keep backups of important information</li>
              </ul>
              <h4>4. Security Risk</h4>
              <ul>
                <li><strong>What it is:</strong> The risk of losing your crypto to hackers, scams, or your own mistakes</li>
                <li><strong>Why it matters:</strong> Unlike banks, there's no insurance if your crypto is stolen</li>
                <li><strong>Example:</strong> Falling for a phishing scam and losing your private keys</li>
                <li><strong>How to manage:</strong> Use strong security practices, enable 2FA, be skeptical of offers</li>
              </ul>
              <h4>5. Regulatory Risk</h4>
              <ul>
                <li><strong>What it is:</strong> The risk that government regulations will negatively impact crypto</li>
                <li><strong>Why it matters:</strong> New laws can affect crypto prices and accessibility</li>
                <li><strong>Example:</strong> A country banning cryptocurrency trading</li>
                <li><strong>How to manage:</strong> Stay informed about regulations, diversify across different cryptos</li>
              </ul>
              <h4>6. Emotional Risk</h4>
              <ul>
                <li><strong>What it is:</strong> The risk of making poor decisions due to fear, greed, or other emotions</li>
                <li><strong>Why it matters:</strong> Emotions are often the biggest enemy of successful trading</li>
                <li><strong>Example:</strong> Panic selling during a market crash or FOMO buying at the top</li>
                <li><strong>How to manage:</strong> Have a plan and stick to it, practice emotional discipline</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Types of Crypto Trading Risks" />
                <p className="image-caption">Types of Crypto Trading Risks</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "The Golden Rules of Risk Management",
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
          content: (
            <>
              <h3>Rule #1: Never Invest More Than You Can Afford to Lose</h3>
              <p><strong>What it means:</strong> Only use money that, if lost completely, wouldn't affect your ability to pay bills, buy groceries, or handle emergencies.</p>
              <p><strong>Why it's crucial:</strong> Crypto is highly volatile and unpredictable. Even the most careful analysis can be wrong.</p>
              <p><strong>How to apply it:</strong></p>
              <ul>
                <li>Pay all your bills first</li>
                <li>Keep 3-6 months of expenses in a savings account</li>
                <li>Only invest "fun money" or money you've specifically set aside for high-risk investments</li>
                <li>If losing the money would cause you stress or financial hardship, don't invest it</li>
              </ul>
              <h3>Rule #2: Start Small and Scale Gradually</h3>
              <p><strong>What it means:</strong> Begin with tiny amounts while you learn, then gradually increase your investment as you gain experience and confidence.</p>
              <p><strong>Why it's important:</strong> Learning to trade with real money is different from theory. Small amounts let you learn without major consequences.</p>
              <p><strong>How to apply it:</strong></p>
              <ul>
                <li>Start with $50-100 for your first trades</li>
                <li>Only increase your investment after you've successfully managed smaller amounts</li>
                <li>Think of your first investments as "tuition" for learning</li>
                <li>Gradually scale up as you prove to yourself that you can manage risk</li>
              </ul>
              <h3>Rule #3: Diversify Your Investments</h3>
              <p><strong>What it means:</strong> Don't put all your money into one cryptocurrency. Spread it across different coins and even different types of investments.</p>
              <p><strong>Why it's essential:</strong> If one cryptocurrency fails, you won't lose everything.</p>
              <p><strong>How to apply it:</strong></p>
              <ul>
                <li><strong>Within Crypto:</strong> Invest in 3-5 different cryptocurrencies</li>
                <li><strong>Beyond Crypto:</strong> Keep crypto as only a small part (5-10%) of your total investments</li>
                <li><strong>Mix Risk Levels:</strong> Combine established coins (Bitcoin, Ethereum) with smaller altcoins</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Golden Rules of Risk Management" />
                <p className="image-caption">Golden Rules of Risk Management</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "Position Sizing and Capital Allocation",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Think of position sizing like deciding how many cookies to put on your plate! If you have 100 cookies total, you wouldn't put 50 on your plate at once - that's too risky! Instead, you'd put maybe 5-10 cookies, so if you drop your plate, you don't lose everything!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Position sizing is determining how much money to invest in each cryptocurrency trade. It's one of the most important aspects of risk management because it directly controls how much you can lose on any single trade."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>What is Position Sizing?</h3>
              <p>Position sizing is determining how much money to invest in each cryptocurrency trade. It's one of the most important aspects of risk management because it directly controls how much you can lose on any single trade.</p>
              <h3>The 1-2% Rule</h3>
              <p><strong>The Rule:</strong> Never risk more than 1-2% of your total investment capital on a single trade.</p>
              <p><strong>Why it works:</strong> Even if you have 10 losing trades in a row, you'll only lose 10-20% of your capital, leaving you plenty to recover.</p>
              <p><strong>How to calculate:</strong></p>
              <ol>
                <li>Determine your total crypto investment budget</li>
                <li>Calculate 1-2% of that amount</li>
                <li>That's your maximum risk per trade</li>
              </ol>
              <h3>Position Sizing Formula</h3>
              <ol>
                <li>Decide your entry price</li>
                <li>Set your stop loss level</li>
                <li>Calculate the difference (your risk per coin)</li>
                <li>Divide your maximum risk by the risk per coin</li>
              </ol>
              <h3>Capital Allocation Strategy</h3>
              <h4>Core Holdings (60-70%):</h4>
              <ul>
                <li>Bitcoin and Ethereum</li>
                <li>Most stable, established cryptocurrencies</li>
                <li>Lower risk, steady growth potential</li>
              </ul>
              <h4>Growth Holdings (20-30%):</h4>
              <ul>
                <li>Top 10-20 altcoins</li>
                <li>Medium risk, higher growth potential</li>
                <li>Coins with strong fundamentals</li>
              </ul>
              <h4>Speculative Holdings (5-10%):</h4>
              <ul>
                <li>Smaller altcoins, new projects</li>
                <li>High risk, high potential reward</li>
                <li>Money you can afford to lose completely</li>
              </ul>
              <h4>Example Portfolio ($1,000):</h4>
              <ul>
                <li>$600-700 in Bitcoin/Ethereum</li>
                <li>$200-300 in established altcoins</li>
                <li>$50-100 in speculative plays</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Position Sizing and Capital Allocation" />
                <p className="image-caption">Position Sizing and Capital Allocation</p>
              </div>
            </>
          )
        }
      },
      duration: "14 minutes"
    },
    {
      title: "Setting Stop Losses and Take Profits",
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
          content: (
            <>
              <h3>Understanding Stop Losses</h3>
              <p>A stop loss is your safety net – an automatic sell order that triggers when the price drops to a predetermined level, limiting your losses.</p>
              <h3>How to Set Stop Losses</h3>
              <ul>
                <li><strong>For Bitcoin/Ethereum:</strong> 15-20% below entry price</li>
                <li><strong>For Top Altcoins:</strong> 20-25% below entry price</li>
                <li><strong>For Speculative Coins:</strong> 25-30% below entry price</li>
              </ul>
              <h3>Types of Stop Losses</h3>
              <ul>
                <li><strong>Fixed Stop Loss:</strong> Set at a specific price and never moved</li>
                <li><strong>Trailing Stop Loss:</strong> Moves up with the price but never down</li>
                <li><strong>Time-Based Stop:</strong> Exit after a certain time period regardless of price</li>
              </ul>
              <h3>Setting Take Profit Levels</h3>
              <h4>Conservative Approach:</h4>
              <ul>
                <li>Take 25% profits at 50% gain</li>
                <li>Take 25% profits at 100% gain</li>
                <li>Let remaining 50% ride</li>
              </ul>
              <h4>Aggressive Approach:</h4>
              <ul>
                <li>Take 20% profits at 100% gain</li>
                <li>Take 30% profits at 200% gain</li>
                <li>Let remaining 50% ride for bigger gains</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Stop Loss and Take Profit Strategies" />
                <p className="image-caption">Stop Loss and Take Profit Strategies</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "Emotional Risk Management",
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
          content: (
            <>
              <h3>Common Emotional Traps</h3>
              <h4>Fear of Missing Out (FOMO):</h4>
              <ul>
                <li>Buying because everyone else is</li>
                <li>Chasing pumping coins</li>
                <li><strong>Solution:</strong> Stick to your plan, there's always another opportunity</li>
              </ul>
              <h4>Fear, Uncertainty, and Doubt (FUD):</h4>
              <ul>
                <li>Panic selling during market crashes</li>
                <li>Believing negative news without research</li>
                <li><strong>Solution:</strong> Focus on facts, not emotions</li>
              </ul>
              <h4>Greed:</h4>
              <ul>
                <li>Not taking profits when you should</li>
                <li>Risking too much for bigger gains</li>
                <li><strong>Solution:</strong> Set profit targets and stick to them</li>
              </ul>
              <h4>Revenge Trading:</h4>
              <ul>
                <li>Making bigger bets to recover losses</li>
                <li>Trading more frequently after losses</li>
                <li><strong>Solution:</strong> Take breaks after losses, stick to position sizing rules</li>
              </ul>
              <h3>Emotional Management Strategies</h3>
              <h4>1. Create a Trading Plan When Calm</h4>
              <ul>
                <li>Make all major decisions when you're not emotional</li>
                <li>Write down your rules and refer to them during stressful times</li>
                <li>Include specific entry and exit criteria</li>
              </ul>
              <h4>2. Use Dollar-Cost Averaging</h4>
              <ul>
                <li>Invest the same amount regularly regardless of price</li>
                <li>Reduces the impact of emotional timing decisions</li>
                <li>Smooths out volatility over time</li>
              </ul>
              <h4>3. Set Limits and Stick to Them</h4>
              <ul>
                <li>Decide maximum daily/weekly trading time</li>
                <li>Set maximum loss limits per day/week</li>
                <li>Walk away when limits are reached</li>
              </ul>
              <h4>4. Practice Mindfulness</h4>
              <ul>
                <li>Take deep breaths before making decisions</li>
                <li>Ask yourself: "Am I making this decision from fear or greed?"</li>
                <li>Consider waiting 24 hours before major decisions</li>
              </ul>
              <h4>5. Keep a Trading Journal</h4>
              <ul>
                <li>Record not just trades but emotions</li>
                <li>Note what you were feeling when you made good/bad decisions</li>
                <li>Learn to recognize your emotional patterns</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Emotional Risk Management" />
                <p className="image-caption">Emotional Risk Management</p>
              </div>
            </>
          )
        }
      },
      duration: "16 minutes"
    },
    {
      title: "Security and Platform Risk",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Security is like keeping your toys safe! You wouldn't leave your favorite toy outside where someone could take it. In crypto, you need to keep your digital money safe by using strong passwords, choosing safe places to store it, and being careful about who you trust!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Security risk involves protecting your crypto from theft, fraud, and technical failures. Platform risk refers to the reliability and safety of the exchanges and wallets you use. Both require careful selection and ongoing vigilance."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>Choosing Safe Exchanges</h3>
              <h4>Look for:</h4>
              <ul>
                <li>Regulatory compliance in your country</li>
                <li>Insurance on customer funds</li>
                <li>Strong security track record</li>
                <li>Good customer support reviews</li>
              </ul>
              <h4>Recommended Features:</h4>
              <ul>
                <li>Two-factor authentication (2FA)</li>
                <li>Cold storage for customer funds</li>
                <li>Regular security audits</li>
                <li>Withdrawal whitelisting</li>
              </ul>
              <h3>Personal Security Best Practices</h3>
              <h4>Strong Passwords:</h4>
              <ul>
                <li>Use unique passwords for each platform</li>
                <li>Include numbers, symbols, and mixed case</li>
                <li>Consider using a password manager</li>
              </ul>
              <h4>Two-Factor Authentication:</h4>
              <ul>
                <li>Enable 2FA on all accounts</li>
                <li>Use authenticator apps instead of SMS when possible</li>
                <li>Keep backup codes in a safe place</li>
              </ul>
              <h4>Wallet Security:</h4>
              <ul>
                <li>Use hardware wallets for large amounts</li>
                <li>Keep private keys offline and secure</li>
                <li>Never share private keys or seed phrases</li>
                <li>Test small amounts before large transfers</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Security and Platform Risk" />
                <p className="image-caption">Security and Platform Risk</p>
              </div>
            </>
          )
        }
      },
      duration: "13 minutes"
    },
    {
      title: "Building Your Risk Management Plan",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Building a risk management plan is like making a recipe! You need to know what ingredients you have (your money), how much to use (position sizing), when to stop cooking (stop losses), and what to do if something goes wrong (backup plan). A good recipe helps you make great food every time!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A risk management plan is a written document that outlines your approach to protecting your trading capital. It should include position sizing rules, stop loss strategies, emotional management techniques, and contingency plans for different market conditions."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>Creating Your Risk Management Plan</h3>
              <p>A comprehensive risk management plan should include the following elements:</p>
              <h4>1. Capital Allocation Rules</h4>
              <ul>
                <li>Maximum percentage of total capital in crypto (recommended: 5-10%)</li>
                <li>Maximum percentage per individual trade (recommended: 1-2%)</li>
                <li>Maximum percentage in any single cryptocurrency</li>
                <li>Minimum emergency fund requirements</li>
              </ul>
              <h4>2. Position Sizing Guidelines</h4>
              <ul>
                <li>Risk per trade calculation method</li>
                <li>Maximum position size based on account size</li>
                <li>Scaling rules for increasing position sizes</li>
                <li>Reduction rules for decreasing position sizes</li>
              </ul>
              <h4>3. Stop Loss and Take Profit Rules</h4>
              <ul>
                <li>Stop loss percentages for different asset types</li>
                <li>Take profit levels and partial profit-taking strategy</li>
                <li>Trailing stop loss rules</li>
                <li>Time-based exit rules</li>
              </ul>
              <h4>4. Emotional Management Protocols</h4>
              <ul>
                <li>Daily/weekly loss limits</li>
                <li>Breaks required after consecutive losses</li>
                <li>Emotional check-in procedures</li>
                <li>When to pause trading</li>
              </ul>
              <h4>5. Security and Platform Guidelines</h4>
              <ul>
                <li>Approved exchanges and wallets</li>
                <li>Security practices and procedures</li>
                <li>Backup and recovery plans</li>
                <li>Regular security review schedule</li>
              </ul>
              <h4>6. Review and Adjustment Schedule</h4>
              <ul>
                <li>Monthly performance reviews</li>
                <li>Quarterly plan adjustments</li>
                <li>Annual comprehensive review</li>
                <li>Trigger points for plan modifications</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Risk Management Plan Framework" />
                <p className="image-caption">Risk Management Plan Framework</p>
              </div>
            </>
          )
        }
      },
      duration: "18 minutes"
    },
    {
      title: "Common Mistakes to Avoid",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Common mistakes are like the things your parents warn you about! Don't run with scissors (don't risk too much), don't talk to strangers (don't trust unknown platforms), and don't put all your eggs in one basket (don't invest everything in one coin). Learning from others' mistakes helps you avoid them!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Common mistakes in crypto trading often stem from emotional decision-making, lack of education, or failure to follow basic risk management principles. Understanding these mistakes helps you avoid them and develop better trading habits."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>Common Mistakes to Avoid</h3>
              <h4>1. Investing More Than You Can Afford to Lose</h4>
              <ul>
                <li><strong>The Mistake:</strong> Using money needed for bills, emergencies, or family expenses</li>
                <li><strong>Why It's Dangerous:</strong> Creates stress and forces poor decisions</li>
                <li><strong>How to Avoid:</strong> Only invest disposable income after all expenses are covered</li>
              </ul>
              <h4>2. Not Using Stop Losses</h4>
              <ul>
                <li><strong>The Mistake:</strong> Hoping prices will recover without setting exit points</li>
                <li><strong>Why It's Dangerous:</strong> Can lead to massive losses during market crashes</li>
                <li><strong>How to Avoid:</strong> Always set stop losses before entering any trade</li>
              </ul>
              <h4>3. FOMO Trading</h4>
              <ul>
                <li><strong>The Mistake:</strong> Buying because everyone else is buying</li>
                <li><strong>Why It's Dangerous:</strong> Often leads to buying at the top</li>
                <li><strong>How to Avoid:</strong> Stick to your plan and analysis, not market sentiment</li>
              </ul>
              <h4>4. Over-Diversification</h4>
              <ul>
                <li><strong>The Mistake:</strong> Spreading money too thin across too many coins</li>
                <li><strong>Why It's Dangerous:</strong> Dilutes potential gains and makes tracking difficult</li>
                <li><strong>How to Avoid:</strong> Focus on 3-5 quality cryptocurrencies</li>
              </ul>
              <h4>5. Ignoring Security</h4>
              <ul>
                <li><strong>The Mistake:</strong> Using weak passwords or unsecured platforms</li>
                <li><strong>Why It's Dangerous:</strong> Risk of losing everything to hackers</li>
                <li><strong>How to Avoid:</strong> Use strong security practices and reputable platforms</li>
              </ul>
              <h4>6. Not Keeping Records</h4>
              <ul>
                <li><strong>The Mistake:</strong> Not tracking trades, profits, and losses</li>
                <li><strong>Why It's Dangerous:</strong> Can't learn from mistakes or track performance</li>
                <li><strong>How to Avoid:</strong> Keep detailed trading records and review regularly</li>
              </ul>
              <h4>7. Emotional Trading</h4>
              <ul>
                <li><strong>The Mistake:</strong> Making decisions based on fear or greed</li>
                <li><strong>Why It's Dangerous:</strong> Emotions often lead to poor decisions</li>
                <li><strong>How to Avoid:</strong> Have a plan and stick to it regardless of emotions</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Common Trading Mistakes" />
                <p className="image-caption">Common Trading Mistakes</p>
              </div>
            </>
          )
        }
      },
      duration: "15 minutes"
    },
    {
      title: "Quick Reference Checklist",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A checklist is like a shopping list! Before you go shopping, you make a list of what you need. Before you trade, you check your list to make sure you're doing everything safely. It helps you remember all the important things and not forget anything!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A quick reference checklist provides a systematic approach to risk management. It ensures that all critical risk management steps are completed before, during, and after each trade, reducing the likelihood of costly mistakes."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <h3>Pre-Trade Checklist</h3>
              <ul>
                <li>✓ Have I only invested money I can afford to lose?</li>
                <li>✓ Is this trade within my 1-2% risk per trade rule?</li>
                <li>✓ Have I set my stop loss before entering the trade?</li>
                <li>✓ Have I set my take profit levels?</li>
                <li>✓ Am I trading based on analysis, not emotion?</li>
                <li>✓ Is this cryptocurrency liquid enough to exit easily?</li>
                <li>✓ Have I checked the security of the platform I'm using?</li>
              </ul>
              <h3>During Trade Checklist</h3>
              <ul>
                <li>✓ Am I sticking to my original plan?</li>
                <li>✓ Have I updated my stop loss if needed?</li>
                <li>✓ Am I managing my emotions?</li>
                <li>✓ Am I not exceeding my daily loss limits?</li>
                <li>✓ Am I keeping records of my decisions?</li>
              </ul>
              <h3>Post-Trade Checklist</h3>
              <ul>
                <li>✓ Did I record the trade details?</li>
                <li>✓ Did I note what went well and what didn't?</li>
                <li>✓ Did I stick to my risk management rules?</li>
                <li>✓ Am I taking a break if I had a loss?</li>
                <li>✓ Am I reviewing my overall portfolio allocation?</li>
              </ul>
              <h3>Weekly Review Checklist</h3>
              <ul>
                <li>✓ Did I stay within my weekly loss limits?</li>
                <li>✓ Did I follow my position sizing rules?</li>
                <li>✓ Did I maintain proper diversification?</li>
                <li>✓ Did I update my trading journal?</li>
                <li>✓ Am I on track with my long-term goals?</li>
              </ul>
              <h3>Monthly Review Checklist</h3>
              <ul>
                <li>✓ Did I review my overall performance?</li>
                <li>✓ Did I identify patterns in my trading?</li>
                <li>✓ Did I adjust my risk management plan if needed?</li>
                <li>✓ Did I check my security practices?</li>
                <li>✓ Did I set goals for the next month?</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Risk Management Checklist" />
                <p className="image-caption">Risk Management Checklist</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
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
