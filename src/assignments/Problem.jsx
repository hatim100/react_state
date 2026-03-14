import React from 'react'

const Problem = ({question,answer,showAnswer}) => {
  return (
    <div>
      <label htmlFor="questionId"><strong>Question</strong></label>
      <h2 id="questionId">{question}</h2>
      {showAnswer && (
        <>
        <label htmlFor="answerId">Answer</label>
        <p id="answerId">{answer}</p>
      </>)}
    </div>
  )
}

export default Problem
