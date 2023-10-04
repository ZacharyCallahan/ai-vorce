"use client";
import { useState } from "react";
import ThreapistQuestion from "./ThreapistQuestion";

const TherapistHandler = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div>
            {questions
                .filter((question, index) => index === currentQuestion)
                .map((question, index) => (
                    <ThreapistQuestion
                        key={index}
                        question={question.question}
                        answers={question.answers}
                        setCurrentQuestion={setCurrentQuestion}
                        currentQuestion={currentQuestion}
                        questionsLength={questions.length}
                    />
                ))}
        </div>
    );
};

export default TherapistHandler;
