import Next from "./Next";
import Prev from "./Prev";

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

    return (
        <div className="space-y-6 ">
            {/* // renders the question and answers from the questions array via the values passed down from props (came from the TherapistHandler)  */}
            <h2 className="my-6 font-semibold">{question}</h2>

            <form action="" className="flex flex-col gap-6">
                <button className="w-fit questions-button">{answerOne}</button>
                <button className="w-fit questions-button">{answerTwo}</button>
                <button className="w-fit questions-button">
                    {answerThree}
                </button>
                <button className="w-fit questions-button">{answerFour}</button>
            </form>
            <div className="flex justify-between">
                {/* Passing down the functions to the buttons call them when the buttons are clicked */}
                <Prev
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    questionsLength={questionsLength}
                />
                <Next
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    questionsLength={questionsLength}
                />
            </div>
        </div>
    );
};

export default ThreapistQuestion;
