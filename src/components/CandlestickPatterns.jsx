import React, { useState } from 'react'
import './Module.css'

const CandlestickPatterns = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])

  const sections = [
    {
      title: "Introduction to Candlestick Patterns",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Imagine you're watching a weather report! Just like how clouds, rain, and sunshine tell us what weather is coming, candlestick patterns tell us what might happen to crypto prices. Each candlestick is like a weather symbol - green means 'sunny' (prices went up), red means 'rainy' (prices went down), and the size tells us how strong the weather was!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Candlestick patterns are visual representations of market psychology and price action. They show the battle between buyers and sellers over time, revealing market sentiment and potential future price movements. The key principle: patterns repeat because human psychology in markets is predictable."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p>Welcome to your comprehensive guide to understanding candlestick patterns! If you've ever looked at a crypto chart and felt overwhelmed by all those colorful bars, you're about to discover that they're actually telling you a fascinating story about market psychology and price movements.</p>
              <p>Candlestick patterns are like learning to read the market's emotions. Each candlestick represents a battle between buyers and sellers during a specific time period, and the patterns they form can give you valuable insights into what might happen next. Think of it as learning a new language – the language of the market.</p>
              <p>Candlestick charts originated in 18th century Japan for rice trading. Each candlestick represents price movement during a specific time period, showing opening, closing, high, and low prices. The body shows the range between open and close, while wicks show the highest and lowest prices reached. This visual system allows traders to quickly assess market sentiment and identify potential trading opportunities.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Candlestick Chart Overview" />
                <p className="image-caption">Candlestick Chart Overview</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Why Candlestick Patterns Matter",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Think of candlestick patterns like traffic signs! Just like how a red light tells you to stop and a green light tells you to go, candlestick patterns give you signals about what the market might do next. They help you know when it's safe to cross the road (buy) or when you should wait (sell)."
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Candlestick patterns matter because they provide actionable insights into market psychology and potential price movements. They help traders identify trend reversals, continuation signals, optimal entry points, and risk management opportunities. The principle is that market psychology is predictable and manifests in consistent visual patterns."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p>As a busy mum entering the crypto world, you might wonder why you need to learn about these patterns. Here's the truth: candlestick patterns are one of the most reliable tools for understanding market sentiment and timing your trades better.</p>
              <p>They help you:</p>
              <ul>
                <li><strong>Spot Trend Reversals:</strong> Know when a price trend might be changing direction</li>
                <li><strong>Identify Continuation Signals:</strong> Recognize when a trend is likely to continue</li>
                <li><strong>Time Your Entries:</strong> Find better moments to buy or sell</li>
                <li><strong>Manage Risk:</strong> Spot warning signs before major price movements</li>
                <li><strong>Build Confidence:</strong> Make decisions based on proven patterns rather than emotions</li>
              </ul>
              <p><strong>Learning Objectives:</strong> By the end of this guide, you will:</p>
              <ul>
                <li>Understand how to read individual candlesticks</li>
                <li>Recognize the most important candlestick patterns for beginners</li>
                <li>Know what each pattern typically signals about future price movement</li>
                <li>Feel confident interpreting candlestick charts</li>
                <li>Have a practical reference guide for your trading decisions</li>
              </ul>
              <p>Remember, you don't need to memorize every pattern immediately. Start with understanding the basics, then gradually build your knowledge. Every expert trader started exactly where you are now, and with practice, reading candlestick patterns will become as natural as reading a book.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Learning Journey Visualization" />
                <p className="image-caption">Learning Journey Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "6 minutes"
    },
    {
      title: "Understanding Candlestick Basics",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A candlestick is like a story about what happened to the price! Imagine each candlestick is a little book that tells you: where the price started (opening), where it ended (closing), how high it went (highest), and how low it went (lowest). The thick part (body) shows if it went up (green) or down (red), and the thin lines (wicks) show how far it traveled!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A candlestick is a visual representation of price movement during a specific time period. Each candlestick shows four crucial pieces of information: opening price, closing price, highest price, and lowest price. The body represents the range between opening and closing prices, while wicks show the highest and lowest prices reached during the period."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>What is a Candlestick?</strong> A candlestick is a visual representation of price movement during a specific time period. Each candlestick shows you four crucial pieces of information:</p>
              <ul>
                <li><strong>Opening Price:</strong> Where the price started at the beginning of the time period</li>
                <li><strong>Closing Price:</strong> Where the price ended at the end of the time period</li>
                <li><strong>Highest Price:</strong> The highest price reached during the time period</li>
                <li><strong>Lowest Price:</strong> The lowest price reached during the time period</li>
              </ul>
              <div className="section-break"></div>
              <p><strong>Anatomy of a Candlestick:</strong></p>
              <p><strong>The Body:</strong> The thick rectangular part of the candlestick</p>
              <ul>
                <li>Shows the range between opening and closing prices</li>
                <li>Green/White body: Closing price is higher than opening price (bullish)</li>
                <li>Red/Black body: Closing price is lower than opening price (bearish)</li>
              </ul>
              <p><strong>The Wicks (or Shadows):</strong> The thin lines extending from the body</p>
              <ul>
                <li>Upper wick: Shows how high the price went above the body</li>
                <li>Lower wick: Shows how low the price went below the body</li>
                <li>Long wicks indicate rejection at those price levels</li>
              </ul>
              <div className="section-break"></div>
              <p><strong>Reading the Story:</strong> Each candlestick tells a story about the battle between buyers and sellers:</p>
              <ul>
                <li><strong>Long Green Body:</strong> Buyers were in strong control throughout the period</li>
                <li><strong>Long Red Body:</strong> Sellers were in strong control throughout the period</li>
                <li><strong>Small Body:</strong> Neither buyers nor sellers had strong control (indecision)</li>
                <li><strong>Long Upper Wick:</strong> Buyers tried to push price higher but were rejected</li>
                <li><strong>Long Lower Wick:</strong> Sellers tried to push price lower but were rejected</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Candlestick Anatomy Diagram" />
                <p className="image-caption">Candlestick Anatomy Diagram</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Market Psychology in Candlesticks",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Candlesticks show us how people feel about the price! When people are scared (fear), they make long red tails pointing down. When people are excited (greed), they make long green tails pointing up. When people are confused (uncertainty), they make small bodies. When people are confident, they make big, strong bodies!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Candlesticks reveal market emotions through their visual characteristics. Fear creates long lower wicks as scared sellers push prices down. Greed creates long upper wicks as excited buyers push prices up. Uncertainty creates small bodies as traders are unsure. Confidence creates long bodies as one side dominates the market."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Time Frames:</strong> Candlesticks can represent different time periods:</p>
              <ul>
                <li><strong>1-minute:</strong> Each candlestick shows 1 minute of price action</li>
                <li><strong>1-hour:</strong> Each candlestick shows 1 hour of price action</li>
                <li><strong>Daily:</strong> Each candlestick shows 1 day of price action</li>
                <li><strong>Weekly:</strong> Each candlestick shows 1 week of price action</li>
              </ul>
              <p><strong>For beginners:</strong> Start with daily candlesticks as they filter out short-term noise and show clearer patterns.</p>
              <div className="section-break"></div>
              <p><strong>Market Psychology:</strong> Understanding what candlesticks reveal about emotions:</p>
              <ul>
                <li><strong>Fear:</strong> Creates long lower wicks as scared sellers push prices down</li>
                <li><strong>Greed:</strong> Creates long upper wicks as excited buyers push prices up</li>
                <li><strong>Uncertainty:</strong> Creates small bodies as traders are unsure</li>
                <li><strong>Confidence:</strong> Creates long bodies as one side dominates</li>
              </ul>
              <p>Each candlestick tells a story about the battle between buyers and sellers:</p>
              <ul>
                <li><strong>Long green body:</strong> Buyers in strong control</li>
                <li><strong>Long red body:</strong> Sellers in strong control</li>
                <li><strong>Small body:</strong> Neither side had strong control (indecision)</li>
                <li><strong>Long upper wick:</strong> Buyers tried to push higher but were rejected</li>
                <li><strong>Long lower wick:</strong> Sellers tried to push lower but were rejected</li>
              </ul>
              <p>Understanding these psychological signals is crucial for pattern recognition.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Market Psychology Visualization" />
                <p className="image-caption">Market Psychology Visualization</p>
              </div>
            </>
          )
        }
      },
      duration: "7 minutes"
    },
    {
      title: "Essential Single Candlestick Patterns - Doji",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A Doji is like when you're trying to decide what to eat for dinner! You think about pizza, then burgers, then pizza again - you just can't make up your mind! A Doji candlestick shows that buyers and sellers are having the same problem - they can't decide which way to push the price, so it ends up almost where it started!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A Doji is a candlestick with a very small body and long wicks on both sides, resembling a cross or plus sign. It indicates indecision in the market where buyers and sellers are evenly matched and neither side is winning the battle. This pattern often signals potential trend reversals or continuation pauses."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>What it looks like:</strong> A candlestick with a very small body and long wicks on both sides, resembling a cross or plus sign.</p>
              <p><strong>What it means:</strong> Indecision in the market. Buyers and sellers are evenly matched, and neither side is winning the battle.</p>
              <p><strong>When it's important:</strong></p>
              <ul>
                <li>After a strong uptrend: May signal the uptrend is losing steam</li>
                <li>After a strong downtrend: May signal the downtrend is losing steam</li>
                <li>At key support or resistance levels: Increases significance</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Don't trade on a doji alone – wait for confirmation</li>
                <li>Watch the next few candlesticks to see which direction the market chooses</li>
                <li>Often signals a potential trend reversal</li>
              </ul>
              <p><strong>Beginner tip:</strong> Think of a doji as the market taking a breath and deciding what to do next.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Doji Pattern Example" />
                <p className="image-caption">Doji Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Essential Single Candlestick Patterns - Hammer",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A Hammer is like when you're playing with a bouncy ball! You throw it down hard, but instead of staying down, it bounces back up! A Hammer candlestick shows that sellers pushed the price down hard, but buyers were so strong that they pushed it right back up. It's like the market saying 'we're not going any lower!'"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A Hammer is a candlestick with a small body at the top and a long lower wick (at least twice the length of the body) with little to no upper wick. After a downtrend, this shows that sellers pushed the price down, but buyers stepped in strongly and pushed it back up, indicating a potential bullish reversal."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>What it looks like:</strong> A candlestick with a small body at the top and a long lower wick (at least twice the length of the body). Little to no upper wick.</p>
              <p><strong>What it means:</strong> After a downtrend, this shows that sellers pushed the price down, but buyers stepped in strongly and pushed it back up.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of a downtrend</li>
                <li>Near support levels</li>
                <li>After a series of red candlesticks</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Bullish reversal signal</li>
                <li>Suggests buyers are gaining control</li>
                <li>Wait for confirmation with the next candlestick</li>
              </ul>
              <p><strong>Beginner tip:</strong> The hammer 'hammers out' a bottom – it's like the market saying 'we're not going any lower.'</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Hammer Pattern Example" />
                <p className="image-caption">Hammer Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "6 minutes"
    },
    {
      title: "Essential Single Candlestick Patterns - Shooting Star",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A Shooting Star is like a firework! It shoots up into the sky really high, but then it falls back down to earth. A Shooting Star candlestick shows that buyers pushed the price up really high, but then sellers came in and pushed it right back down. It's like the market saying 'we're not going any higher!'"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A Shooting Star is a candlestick with a small body at the bottom and a long upper wick (at least twice the length of the body) with little to no lower wick. After an uptrend, this shows that buyers pushed the price up, but sellers stepped in strongly and pushed it back down, indicating a potential bearish reversal."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>What it looks like:</strong> A candlestick with a small body at the bottom and a long upper wick (at least twice the length of the body). Little to no lower wick.</p>
              <p><strong>What it means:</strong> After an uptrend, this shows that buyers pushed the price up, but sellers stepped in strongly and pushed it back down.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of an uptrend</li>
                <li>Near resistance levels</li>
                <li>After a series of green candlesticks</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Bearish reversal signal</li>
                <li>Suggests sellers are gaining control</li>
                <li>Wait for confirmation with the next candlestick</li>
              </ul>
              <p><strong>Beginner tip:</strong> The shooting star 'shoots up' but falls back down – like a firework that goes up but then comes crashing down.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Shooting Star Pattern Example" />
                <p className="image-caption">Shooting Star Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "6 minutes"
    },
    {
      title: "Essential Single Candlestick Patterns - Spinning Top & Marubozu",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "A Spinning Top is like a coin flip! The price goes up, then down, then up, then down - it just can't decide! A Marubozu is like a strong person pushing in one direction - no hesitation, no stopping, just pure strength! The Spinning Top shows confusion, while the Marubozu shows confidence!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A Spinning Top has a small body with long wicks on both sides, indicating high volatility but indecision. A Marubozu has a long body with no wicks (or very tiny wicks), showing very strong conviction from either buyers or sellers with no indecision whatsoever."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Spinning Top:</strong></p>
              <p><strong>What it looks like:</strong> A candlestick with a small body (can be green or red) and long wicks on both sides.</p>
              <p><strong>What it means:</strong> High volatility but indecision. The price moved significantly in both directions but ended close to where it started.</p>
              <p><strong>When it's significant:</strong></p>
              <ul>
                <li>During trending markets: May signal trend exhaustion</li>
                <li>At key levels: Increases importance</li>
                <li>Multiple spinning tops: Shows ongoing indecision</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Neutral signal – wait for direction</li>
                <li>Often precedes significant moves</li>
                <li>Don't trade until you see confirmation</li>
              </ul>
              <p><strong>Beginner tip:</strong> A spinning top is like a coin flip – the market can't decide which way to go.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Spinning Top Pattern Example" />
                <p className="image-caption">Spinning Top Pattern Example</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Marubozu:</strong></p>
              <p><strong>What it looks like:</strong> A candlestick with a long body and no wicks (or very tiny wicks).</p>
              <p><strong>Types:</strong></p>
              <ul>
                <li><strong>Bullish Marubozu:</strong> Long green body, opens at the low and closes at the high</li>
                <li><strong>Bearish Marubozu:</strong> Long red body, opens at the high and closes at the low</li>
              </ul>
              <p><strong>What it means:</strong> Very strong conviction from either buyers or sellers. No indecision whatsoever.</p>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong continuation signal in the direction of the body</li>
                <li>Shows dominant market sentiment</li>
                <li>Often leads to further movement in the same direction</li>
              </ul>
              <p><strong>Beginner tip:</strong> Marubozu means 'bald head' in Japanese – there are no wicks (hair) on this candlestick.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Marubozu Pattern Example" />
                <p className="image-caption">Marubozu Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Key Two-Candlestick Patterns - Engulfing Patterns",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Engulfing patterns are like when a big fish eats a little fish! In a Bullish Engulfing, a big green fish (buyers) completely eats up a little red fish (sellers). In a Bearish Engulfing, a big red fish (sellers) completely eats up a little green fish (buyers). The bigger fish shows who's really in charge!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Engulfing patterns occur when one candlestick completely covers or 'engulfs' the previous candlestick. Bullish Engulfing: Small red candlestick followed by larger green candlestick that completely covers the previous red one. Bearish Engulfing: Small green candlestick followed by larger red candlestick that completely engulfs the previous green one."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Bullish Engulfing:</strong></p>
              <p><strong>What it looks like:</strong> A small red candlestick followed by a larger green candlestick that completely 'engulfs' or covers the previous red one.</p>
              <p><strong>What it means:</strong> Sellers were in control initially, but buyers stepped in with such force that they not only overcame the selling pressure but pushed the price significantly higher.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of a downtrend</li>
                <li>Near support levels</li>
                <li>After a series of red candlesticks</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bullish reversal signal</li>
                <li>Suggests a shift from bearish to bullish sentiment</li>
                <li>The larger the engulfing candle, the stronger the signal</li>
              </ul>
              <p><strong>Confirmation:</strong> Look for the next candlestick to continue higher to confirm the reversal.</p>
              <p><strong>Beginner tip:</strong> Think of it as the green candle 'eating up' the red candle – buyers are taking control.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Bullish Engulfing Pattern Example" />
                <p className="image-caption">Bullish Engulfing Pattern Example</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Bearish Engulfing:</strong></p>
              <p><strong>What it looks like:</strong> A small green candlestick followed by a larger red candlestick that completely engulfs the previous green one.</p>
              <p><strong>What it means:</strong> Buyers were in control initially, but sellers stepped in with such force that they overwhelmed the buying pressure and pushed the price significantly lower.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of an uptrend</li>
                <li>Near resistance levels</li>
                <li>After a series of green candlesticks</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bearish reversal signal</li>
                <li>Suggests a shift from bullish to bearish sentiment</li>
                <li>The larger the engulfing candle, the stronger the signal</li>
              </ul>
              <p><strong>Confirmation:</strong> Look for the next candlestick to continue lower to confirm the reversal.</p>
              <p><strong>Beginner tip:</strong> The red candle 'swallows' the green candle – sellers are taking control.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Bearish Engulfing Pattern Example" />
                <p className="image-caption">Bearish Engulfing Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Key Two-Candlestick Patterns - Piercing & Dark Cloud Cover",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Piercing Pattern is like an arrow! A red candle (sellers) is followed by a green arrow (buyers) that pierces right through the middle of the red candle. Dark Cloud Cover is like a storm cloud! A green candle (buyers) is followed by a dark red cloud (sellers) that covers over the green candle's optimism!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Piercing Pattern: A red candlestick followed by a green candlestick that opens below the red candle's low but closes above the midpoint of the red candle's body. Dark Cloud Cover: A green candlestick followed by a red candlestick that opens above the green candle's high but closes below the midpoint of the green candle's body."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Piercing Pattern:</strong></p>
              <p><strong>What it looks like:</strong> A red candlestick followed by a green candlestick that opens below the red candle's low but closes above the midpoint of the red candle's body.</p>
              <p><strong>What it means:</strong> After selling pressure, buyers stepped in strongly and 'pierced' through the bearish sentiment.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>During downtrends</li>
                <li>Near support levels</li>
                <li>After significant selling</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Bullish reversal signal (though weaker than bullish engulfing)</li>
                <li>Shows buyers are starting to gain control</li>
                <li>Wait for confirmation</li>
              </ul>
              <p><strong>Beginner tip:</strong> The green candle 'pierces' through the red candle like an arrow.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Piercing Pattern Example" />
                <p className="image-caption">Piercing Pattern Example</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Dark Cloud Cover:</strong></p>
              <p><strong>What it looks like:</strong> A green candlestick followed by a red candlestick that opens above the green candle's high but closes below the midpoint of the green candle's body.</p>
              <p><strong>What it means:</strong> After buying pressure, sellers stepped in and created a 'dark cloud' over the bullish sentiment.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>During uptrends</li>
                <li>Near resistance levels</li>
                <li>After significant buying</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Bearish reversal signal (though weaker than bearish engulfing)</li>
                <li>Shows sellers are starting to gain control</li>
                <li>Wait for confirmation</li>
              </ul>
              <p><strong>Beginner tip:</strong> The red candle creates a 'dark cloud' over the green candle's optimism.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Dark Cloud Cover Pattern Example" />
                <p className="image-caption">Dark Cloud Cover Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "Key Two-Candlestick Patterns - Harami Pattern",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Harami means 'pregnant' in Japanese! It's like a big candle that's 'pregnant' with a little baby candle inside! The big candle shows strong movement, but then the little candle shows that the market is getting tired and might change direction. It's like the big movement is running out of energy!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "A Harami pattern consists of a large candlestick followed by a smaller candlestick that fits completely within the body of the first candle. Types include Bullish Harami (large red candle followed by small green candle) and Bearish Harami (large green candle followed by small red candle)."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>What it looks like:</strong> A large candlestick followed by a smaller candlestick that fits completely within the body of the first candle.</p>
              <p><strong>Types:</strong></p>
              <ul>
                <li><strong>Bullish Harami:</strong> Large red candle followed by small green candle</li>
                <li><strong>Bearish Harami:</strong> Large green candle followed by small red candle</li>
              </ul>
              <p><strong>What it means:</strong> After strong movement in one direction, the market shows indecision and potential exhaustion.</p>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Potential reversal signal</li>
                <li>Shows momentum is slowing</li>
                <li>Often followed by a change in direction</li>
              </ul>
              <p><strong>Beginner tip:</strong> 'Harami' means 'pregnant' in Japanese – the small candle is like a baby inside the larger candle.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Harami Pattern Example" />
                <p className="image-caption">Harami Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "6 minutes"
    },
    {
      title: "Important Three-Candlestick Patterns - Morning & Evening Star",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Morning Star is like dawn breaking! First it's dark (big red candle), then there's a little star (small candle), then the sun comes up (big green candle)! Evening Star is like sunset! First it's bright (big green candle), then there's a little star (small candle), then it gets dark (big red candle)! These patterns tell us when the market's 'day' is starting or ending!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Morning Star: Three candlesticks - large red (bearish sentiment), small candlestick with gap down (indecision), large green that closes well into first candle's body (bullish reversal). Evening Star: Three candlesticks - large green (bullish sentiment), small candlestick with gap up (indecision), large red that closes well into first candle's body (bearish reversal)."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Morning Star:</strong></p>
              <p><strong>What it looks like:</strong> Three candlesticks in sequence:</p>
              <ol>
                <li>Large red candlestick (bearish sentiment)</li>
                <li>Small candlestick (can be red or green) with a gap down (indecision)</li>
                <li>Large green candlestick that closes well into the first candle's body (bullish reversal)</li>
              </ol>
              <p><strong>What it means:</strong> Like the morning star that appears before dawn, this pattern signals the end of a dark period (downtrend) and the beginning of a bright period (uptrend).</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of downtrends</li>
                <li>Near major support levels</li>
                <li>After extended selling</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bullish reversal signal</li>
                <li>Suggests a significant shift in market sentiment</li>
                <li>One of the most reliable reversal patterns</li>
              </ul>
              <p><strong>Beginner tip:</strong> Think of it as the market's 'dawn' – darkness (red) gives way to light (green).</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Morning Star Pattern Example" />
                <p className="image-caption">Morning Star Pattern Example</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Evening Star:</strong></p>
              <p><strong>What it looks like:</strong> Three candlesticks in sequence:</p>
              <ol>
                <li>Large green candlestick (bullish sentiment)</li>
                <li>Small candlestick (can be red or green) with a gap up (indecision)</li>
                <li>Large red candlestick that closes well into the first candle's body (bearish reversal)</li>
              </ol>
              <p><strong>What it means:</strong> Like the evening star that appears at dusk, this pattern signals the end of a bright period (uptrend) and the beginning of a dark period (downtrend).</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>At the end of uptrends</li>
                <li>Near major resistance levels</li>
                <li>After extended buying</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bearish reversal signal</li>
                <li>Suggests a significant shift in market sentiment</li>
                <li>One of the most reliable reversal patterns</li>
              </ul>
              <p><strong>Beginner tip:</strong> Think of it as the market's 'dusk' – light (green) gives way to darkness (red).</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Evening Star Pattern Example" />
                <p className="image-caption">Evening Star Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Important Three-Candlestick Patterns - Three Soldiers & Crows",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Three White Soldiers are like three strong soldiers marching forward together! Each green candle is a soldier, and they're all marching higher and higher. Three Black Crows are like three crows bringing bad news! Each red candle is a crow, and they're all flying lower and lower, bringing down the price!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Three White Soldiers: Three consecutive green candlesticks, each opening within the previous candle's body and closing progressively higher. Three Black Crows: Three consecutive red candlesticks, each opening within the previous candle's body and closing progressively lower. Both patterns show sustained pressure in their respective directions."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Three White Soldiers:</strong></p>
              <p><strong>What it looks like:</strong> Three consecutive green candlesticks, each opening within the previous candle's body and closing progressively higher.</p>
              <p><strong>What it means:</strong> Strong, sustained buying pressure. Like soldiers marching forward in formation, buyers are advancing steadily.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>After downtrends or consolidation</li>
                <li>Near support levels</li>
                <li>During the beginning of new uptrends</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bullish continuation signal</li>
                <li>Shows sustained buying interest</li>
                <li>Often leads to further upward movement</li>
              </ul>
              <p><strong>Beginner tip:</strong> Three soldiers marching upward – buyers are in strong formation.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Three White Soldiers Pattern Example" />
                <p className="image-caption">Three White Soldiers Pattern Example</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Three Black Crows:</strong></p>
              <p><strong>What it looks like:</strong> Three consecutive red candlesticks, each opening within the previous candle's body and closing progressively lower.</p>
              <p><strong>What it means:</strong> Strong, sustained selling pressure. Like crows bringing bad news, sellers are advancing steadily.</p>
              <p><strong>When to look for it:</strong></p>
              <ul>
                <li>After uptrends or consolidation</li>
                <li>Near resistance levels</li>
                <li>During the beginning of new downtrends</li>
              </ul>
              <p><strong>Trading implications:</strong></p>
              <ul>
                <li>Strong bearish continuation signal</li>
                <li>Shows sustained selling interest</li>
                <li>Often leads to further downward movement</li>
              </ul>
              <p><strong>Beginner tip:</strong> Three crows flying downward – sellers are in strong formation.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Three Black Crows Pattern Example" />
                <p className="image-caption">Three Black Crows Pattern Example</p>
              </div>
            </>
          )
        }
      },
      duration: "8 minutes"
    },
    {
      title: "How to Trade Candlestick Patterns - Step-by-Step Process",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Trading with patterns is like following a recipe! First, you identify what you're cooking (the pattern). Then you check if you have all the ingredients (context). Then you wait for the oven to be ready (confirmation). Then you put your food in (entry). Then you set a timer (stop loss) and decide when to take it out (profit target)!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Trading candlestick patterns requires a systematic approach: Identify the pattern, consider the context, wait for confirmation, plan your entry, set your stop loss, and set your profit target. The key principle is that patterns provide signals but require confirmation and proper risk management to be effective."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Step-by-Step Trading Process:</strong></p>
              <p><strong>Step 1: Identify the Pattern</strong></p>
              <ul>
                <li>Look for clear, well-formed patterns</li>
                <li>Don't force patterns that aren't obvious</li>
                <li>Focus on patterns at key levels (support/resistance)</li>
              </ul>
              <p><strong>Step 2: Consider the Context</strong></p>
              <ul>
                <li>What's the overall trend?</li>
                <li>Where is the pattern forming (support, resistance, middle of range)?</li>
                <li>What's the market sentiment?</li>
              </ul>
              <p><strong>Step 3: Wait for Confirmation</strong></p>
              <ul>
                <li>Don't trade immediately when you spot a pattern</li>
                <li>Wait for the next candlestick to confirm the signal</li>
                <li>Look for volume confirmation (higher volume = stronger signal)</li>
              </ul>
              <p><strong>Step 4: Plan Your Entry</strong></p>
              <ul>
                <li>Reversal patterns: Enter when confirmation candle breaks the pattern</li>
                <li>Continuation patterns: Enter in the direction of the trend</li>
                <li>Use limit orders to get better entry prices</li>
              </ul>
              <p><strong>Step 5: Set Your Stop Loss</strong></p>
              <ul>
                <li>Place stop loss beyond the pattern's key level</li>
                <li>For bullish patterns: Stop below the pattern's low</li>
                <li>For bearish patterns: Stop above the pattern's high</li>
              </ul>
              <p><strong>Step 6: Set Your Profit Target</strong></p>
              <ul>
                <li>Use support/resistance levels as targets</li>
                <li>Consider risk-reward ratio (aim for at least 1:2)</li>
                <li>Take partial profits as price moves in your favor</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Trading Process Flowchart" />
                <p className="image-caption">Trading Process Flowchart</p>
              </div>
            </>
          )
        }
      },
      duration: "12 minutes"
    },
    {
      title: "Risk Management & Common Mistakes",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "Risk management is like wearing a helmet when you ride your bike! You hope you don't fall, but if you do, the helmet protects you. Common mistakes are like forgetting to wear your helmet, or trying to ride too fast without practice, or getting scared and falling off when you see a bump in the road!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "Risk management rules are fundamental principles that protect your trading capital: Never risk more than 2% of your account on a single trade, always use stop losses, don't trade every pattern you see, focus on high-probability setups, and keep a trading journal. Common mistakes include pattern hunting, ignoring context, no confirmation, poor risk management, and emotional trading."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Risk Management Rules:</strong></p>
              <ol>
                <li>Never risk more than 2% of your account on a single trade</li>
                <li>Always use stop losses</li>
                <li>Don't trade every pattern you see</li>
                <li>Focus on high-probability setups</li>
                <li>Keep a trading journal to track your results</li>
              </ol>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Risk Management Guidelines" />
                <p className="image-caption">Risk Management Guidelines</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Common Mistakes to Avoid:</strong></p>
              <ul>
                <li><strong>Pattern hunting:</strong> Seeing patterns that aren't really there</li>
                <li><strong>Ignoring context:</strong> Trading patterns without considering the bigger picture</li>
                <li><strong>No confirmation:</strong> Entering trades too early</li>
                <li><strong>Poor risk management:</strong> Not using stop losses or risking too much</li>
                <li><strong>Emotional trading:</strong> Letting fear or greed override your plan</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Common Trading Mistakes" />
                <p className="image-caption">Common Trading Mistakes</p>
              </div>
            </>
          )
        }
      },
      duration: "10 minutes"
    },
    {
      title: "Quick Reference Guide & Next Steps",
      content: {
        explainLike5: {
          title: "Explain it Like I'm 5",
          content: "This is like your cheat sheet for candlestick patterns! It's like having a quick guide that reminds you what each pattern means. Next steps are like planning your next adventure - you've learned the map, now it's time to start exploring! Remember, practice makes perfect, just like learning to ride a bike!"
        },
        principleFirst: {
          title: "Principle-First Learning",
          content: "The quick reference guide provides a summary of key patterns for easy recall during trading. Next steps involve practicing pattern recognition, developing a trading plan, and building confidence through experience. The principle is that mastery comes through consistent practice and application of learned concepts."
        },
        detailedUnderstanding: {
          title: "Detailed Understanding",
          content: (
            <>
              <p><strong>Quick Reference Guide:</strong></p>
              <p><strong>Bullish Reversal Patterns:</strong></p>
              <ul>
                <li><strong>Hammer:</strong> Small body, long lower wick (after downtrend)</li>
                <li><strong>Bullish Engulfing:</strong> Large green candle engulfs small red candle</li>
                <li><strong>Morning Star:</strong> Red → Small → Green sequence</li>
                <li><strong>Piercing Pattern:</strong> Green candle opens below red candle's low but closes above midpoint</li>
              </ul>
              <p><strong>Bearish Reversal Patterns:</strong></p>
              <ul>
                <li><strong>Shooting Star:</strong> Small body, long upper wick (after uptrend)</li>
                <li><strong>Bearish Engulfing:</strong> Large red candle engulfs small green candle</li>
                <li><strong>Evening Star:</strong> Green → Small → Red sequence</li>
                <li><strong>Dark Cloud Cover:</strong> Red candle opens above green candle's high but closes below midpoint</li>
              </ul>
              <p><strong>Continuation Patterns:</strong></p>
              <ul>
                <li><strong>Marubozu:</strong> Long body with no wicks (strong conviction)</li>
                <li><strong>Three White Soldiers:</strong> Three consecutive green candles closing higher</li>
                <li><strong>Three Black Crows:</strong> Three consecutive red candles closing lower</li>
              </ul>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Pattern Reference Chart" />
                <p className="image-caption">Pattern Reference Chart</p>
              </div>
              <div className="section-break"></div>
              <p><strong>Next Steps:</strong></p>
              <ul>
                <li>Practice pattern recognition on historical charts</li>
                <li>Develop a trading plan incorporating candlestick analysis</li>
                <li>Start with paper trading to build confidence</li>
                <li>Keep a detailed trading journal</li>
                <li>Gradually increase position sizes as you gain experience</li>
              </ul>
              <p>Remember that every expert trader started as a beginner.</p>
              <div className="content-image">
                <img src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756086245/BIB-icon_x02otm.png" alt="Learning Journey Visualization" />
                <p className="image-caption">Learning Journey Visualization</p>
              </div>
            </>
          )
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
            src="https://res.cloudinary.com/dhxriuzu5/image/upload/v1756091216/BIB-starter-6_oe9zp5.jpg" 
            alt="Candlestick Patterns Explained"
            className="featured-image"
          />
        </div>
        <div className="header-content">
          <h1>Candlestick Patterns Explained</h1>
          <p>Master the art of reading market psychology through candlestick patterns</p>
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
                <div className="detailed-content">
                  {sections[currentSection].content.detailedUnderstanding.content}
                </div>
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

export default CandlestickPatterns
