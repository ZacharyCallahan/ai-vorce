"use client";
import { useState } from "react";
import ThreapistQuestion from "./ThreapistQuestion";

const TherapistHandler = ({ questions }) => {
    // state value to keep track of the index of the current question
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    //TODO: update it using search params instead of state to make it server side rendering



    
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
