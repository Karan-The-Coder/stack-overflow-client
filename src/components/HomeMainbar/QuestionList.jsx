import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <>
        {
            questionsList.map((question, i) => (
                <Questions question={question} key={i} />  // 'question.id is changed by i' because of error
            ))  
        }
    </>
  )
}

export default QuestionList
