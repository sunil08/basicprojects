import React from 'react'
import "./quiz.css"

const QuizData = ({question, options, handleOptionClick, currentAnswer}) => {
  return (
    <div>
      <h2>{question}</h2>
       <ul>
        {
          options.map((option, index)=>{ 
            return (
              <li onClick={() => handleOptionClick(option)} key={index} className={currentAnswer === option ? 'selected' : ''}>{option}</li>
            )
          }
          )
        }
      </ul>
    </div>
  )
}

export default QuizData
