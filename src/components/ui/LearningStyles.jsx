import React from 'react'
import { LEARNING_STYLES } from '../../utils/constants'

const LearningStyles = ({ content }) => {
  return (
    <div className="learning-styles">
      <div className="learning-style">
        <h3 className="style-title">{LEARNING_STYLES.EXPLAIN_LIKE_5}</h3>
        <p>{content.explainLike5}</p>
      </div>

      <div className="learning-style">
        <h3 className="style-title">{LEARNING_STYLES.PRINCIPLE_FIRST}</h3>
        <p>{content.principleFirst}</p>
      </div>

      <div className="learning-style">
        <h3 className="style-title">{LEARNING_STYLES.DETAILED_UNDERSTANDING}</h3>
        {content.detailedUnderstanding}
      </div>
    </div>
  )
}

export default LearningStyles
