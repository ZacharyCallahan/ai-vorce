'use client'
import Next from "./Next";
import Prev from "./Prev";
import { useState } from "react";
import { getSession } from "next-auth/react";

const ThreapistQuestion = ({
    question,
    answers,
    setCurrentQuestion,
    currentQuestion,
    questionsLength,
}) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]); // state value to keep track of the answers
    const session = getSession();
    const user = session.user;
    console.log(session)
    console.log(user)
    const handleAnswer = (answer) => {
        // remove the previous answer for this question
        const newAnswers = selectedAnswers.filter((ans) => {
            return ans.split("-")[0] !== currentQuestion.toString();
        });
        // add the new answer to the answers array
        setSelectedAnswers([...newAnswers, `${currentQuestion}-${answer}`]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedAnswers);
        console.log(session)
        console.log(user)
        if (!user) {
            console.log("User is not logged in. Please log in to continue.")
            return;
        }
        
        //axios call to the backend to send the answers to the database
        axios.post('/api/submitAnswers', {
            userId: user.id,
            answers: selectedAnswers
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="space-y-6 ">
            <h2 className="my-6 font-semibold">{question}</h2>

            <form onSubmit={handleSubmit} className={`flex flex-col gap-6`}>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`w-fit questions-button ${selectedAnswers.includes(`${currentQuestion}-${answer}`) ? "bg-green-500" : "bg-accent"
                            }`}
                        onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </form>
            <div className="flex justify-between">
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