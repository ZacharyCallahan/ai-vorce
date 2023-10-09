'use client'
import Next from "./Next";
import Prev from "./Prev";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const ThreapistQuestion = ({
    question,
    answers,
    setCurrentQuestion,
    currentQuestion,
    questionsLength,
}) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]); // state value to keep track of the answers
        const session = useSession();
        const user = session?.data?.user ?? null;
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
        if (!user) {
            console.log("User is not logged in. Please log in to continue.")
            return;
        }
        console.log(selectedAnswers);
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
                        type="button"
                        key={index}
                        className={`w-fit questions-button ${
                            selectedAnswers.includes(
                                `${currentQuestion}-${answer}`
                            )
                                ? "bg-green-500"
                                : "bg-accent"
                        }`}
                        onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
                <div className="flex justify-between">
                    <Prev
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        questionsLength={questionsLength}
                    />
                    {questionsLength === currentQuestion + 1 ? (
                        <button
                            type="submit"
                            className="bg-accent hover:bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                            Submit
                        </button>
                    ) : (
                        <Next
                            currentQuestion={currentQuestion}
                            setCurrentQuestion={setCurrentQuestion}
                            questionsLength={questionsLength}
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default ThreapistQuestion;