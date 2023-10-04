'use client'
import Next from "./Next";
import Prev from "./Prev";
import { useState } from "react";

const ThreapistQuestion = ({
    question,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    setCurrentQuestion,
    currentQuestion,
    questionsLength,
}) => {
    const [answers, setAnswers] = useState([]); // state value to keep track of the answers

    const handleAnswer = (answer) => {
        // remove the previous answer for this question
        const newAnswers = answers.filter((ans) => {
            return ans.split("-")[0] !== currentQuestion.toString();
        });
        // add the new answer to the answers array
        setAnswers([...newAnswers, `${currentQuestion}-${answer}`]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(answers);

        if (!user) {
            console.log("User is not logged in. Please log in to continue.")
            return;
        }
        //axios call to the backend to send the answers to the database
        
    };
    
    return (
        <div className="space-y-6 ">
            {/* // renders the question and answers from the questions array via the values passed down from props (came from the TherapistHandler)  */}
            <h2 className="my-6 font-semibold">{question}</h2>

            <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
                <button
                    className={`w-fit questions-button ${
                        answers.includes(`${currentQuestion}-${answerOne}`) ? "bg-green-500" : "bg-accent"
                    }`}
                    onClick={() => handleAnswer(answerOne)}>
                    {answerOne}
                </button>
                <button
                    className={`w-fit questions-button ${
                        answers.includes(`${currentQuestion}-${answerTwo}`) ? "bg-green-500" : "bg-accent"
                    }`}
                    onClick={() => handleAnswer(answerTwo)}>
                    {answerTwo}
                </button>
                <button
                    className={`w-fit questions-button ${
                        answers.includes(`${currentQuestion}-${answerThree}`) ? "bg-green-500" : "bg-accent"
                    }`}
                    onClick={() => handleAnswer(answerThree)}>
                    {answerThree}
                </button>
                <button
                    className={`w-fit questions-button ${
                        answers.includes(`${currentQuestion}-${answerFour}`) ? "bg-green-500" : "bg-accent"
                    }`}
                    onClick={() => handleAnswer(answerFour)}>
                    {answerFour}
                </button>
            </form>
            <div className="flex justify-between">
                {/* Passing down the functions to the buttons call them when the buttons are clicked */}
                <Prev
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    questionsLength={questionsLength}
                />
                {questionsLength === currentQuestion + 1 ? (
                    <button
                        className="bg-accent hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                ) : <Next
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                questionsLength={questionsLength}
            />}  
            </div>
        </div>
    );
};

export default ThreapistQuestion;
