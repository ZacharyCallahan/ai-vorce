"use client";
import { useState } from "react";
import ThreapistQuestion from "./ThreapistQuestion";

const TherapistHandler = () => {  
    const questions = [
        //array of object
        {
            question: "This is the question?", //object with question and answers
            answerOne: "tests",
            answerTwo: "answer asdasd",
            answerThree: "answer asdasd",
            answerFour: "answer asdasd",
        },
        {
            //array of object
            question: "This is the second question", //object with question and answers
            answerOne: "1",
            answerTwo: "2",
            answerThree: "3",
            answerFour: "4",
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
        <div>
            {questions
                //filters through questions array and returns the question at the index of currentQuestion (state value)
                .filter((question, index) => index === currentQuestion)
                // map through the question at the index of currentQuestion and return the question and answers 
                .map((question, index) => (
                    // pass the question and answers as props to the ThreapistQuestion component to render the string values from the questions array
                    // also pass the setCurrentQuestion function as a prop to the ThreapistQuestion component to update the state value 
                    // of currentQuestion when a user clicks the next or prev button
                    <ThreapistQuestion
                        key={index}
                        question={question.question}
                        answerOne={question.answerOne}
                        answerTwo={question.answerTwo}
                        answerThree={question.answerThree}
                        answerFour={question.answerFour}
                        setCurrentQuestion={setCurrentQuestion}
                        currentQuestion={currentQuestion}
                        questionsLength={questions.length}
                    />
                ))}
        </div>
    );
};

export default TherapistHandler;
