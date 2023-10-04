import TherapistHeader from "./TherapistHeader";
import ThreapistHandler from "./TherapistHandler";

const TherapistForm = () => {
    const questions = [
        //array of object
        {
            question: "How long were/have you and your spouse been together?", //object with question and answers
            answerOne: "Less than 1 year",
            answerTwo: "1-5 years",
            answerThree: "5-10 years",
            answerFour: "10+ years",
        },
        {
            //array of object
            question: "How would you explain how you feel about your current situation", //object with question and answers
            answerOne: "Sad",
            answerTwo: "Angry",
            answerThree: "Confused",
            answerFour: "Happy",
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
