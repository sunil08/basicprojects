import React, { useState } from 'react'
import QuizData from './QuizData';
import "./quiz.css";

const Quiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            question: "What is your name?",
            options: ["Sunil", "Atharv", "Navya", "Renu"],
            correctAns: "Sunil"
        },
        {
            id: 2,
            question: "What is 2 + 9",
            options: ["11", "22", "33", "44"],
            correctAns: "11"
        },
        {
            id: 3,
            question: "What is Apple?",
            options: ["Fruit", "Phone", "flower", "Vegetable"],
            correctAns: "Fruit"
        }
    ]

    console.log("render");

    const handleOptionClick = (option) => {
        setCurrentAnswer(option);
        if(option === questions[currentQuestion].correctAns){
            setScore(score => (score + 1));
        }
        console.log(option);
    }

    const handleNextQuestion = () => {
        setcurrentQuestion(currentQuestion + 1);
        setCurrentAnswer(null);
    }

  return (
    <div>
    {
        currentQuestion < questions.length ? <div>
            <QuizData 
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                handleOptionClick={handleOptionClick}
                currentAnswer = {currentAnswer}/>
            <button disabled={currentAnswer === null} className={currentAnswer === null  ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
        </div> : `Your score is ${score}`
    }
    </div>
  )
}

export default Quiz
