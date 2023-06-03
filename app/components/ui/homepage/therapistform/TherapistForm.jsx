import TherapistHeader from "./TherapistHeader";
import ThreapistHandler from "./TherapistHandler";

const TherapistForm = () => {
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

    return (
        <div className="w-1/2 border-black border-2 p-6">
            <TherapistHeader />
            <ThreapistHandler questions={questions} />
        </div>
    );
};

export default TherapistForm;
