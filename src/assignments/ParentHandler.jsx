import React, { useState } from 'react'
import Problem from './Problem';

const ParentHandler = () => {

    const [showAnswer,setShowAnswer] = useState(false);
    const [currentIndex,setCurrentIndex] = useState(0);
    const problemArray = [
        {
            "question":"Which day is the held as Teachers' day?",
            "answer":"5th September."
        },
        {
            "question":"Who is the first prime minister of India?",
            "answer":"Dr. Rajendra Prasad."
        },
        {
            "question":"Which day is held as World Environment Day?",
            "answer":"5th June."
        }
    ]
    const currentProblem = problemArray[currentIndex];
    // if (!currentProblem) return null;

  function handleNext() {
    if(currentIndex<problemArray.length-1){
        setCurrentIndex(currentIndex=>currentIndex+1);
        setShowAnswer(false);
    }
  }
  const handlePrevious = () => {
    if(currentIndex>0){
        setCurrentIndex(currentIndex=>currentIndex-1);
        setShowAnswer(false);
    }
  }
  const toggleAnswer = () => {
    setShowAnswer(showAnswer => !showAnswer)
  }
  return (
    <div>
      {currentProblem && <Problem question={currentProblem.question} answer={currentProblem.answer} showAnswer={showAnswer}/>}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={toggleAnswer}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
    </div>
  )
}

export default ParentHandler
