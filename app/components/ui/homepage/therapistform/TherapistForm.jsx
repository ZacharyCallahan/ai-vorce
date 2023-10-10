import TherapistHeader from "./TherapistHeader";
import ThreapistHandler from "./TherapistHandler";

const TherapistForm = () => {
    const questions = [
        //array of object
        {
            question: "How long were/have you and your spouse been married?",
            answers: ["Less than 1 year", "1-5 years", "5-10 years", "10+ years"],
        },
        {
            question: "How would you explain how you feel about your current situation",
            answers: ["Sad", "Angry", "Confused", "Happy", "I dont know"],
        },
    ];

    return (
        <div className="w-1/2 border-2 border-primary p-6 rounded-lg shadow-lg bg-background">
            <TherapistHeader />
            <ThreapistHandler questions={questions} />
        </div>
    );
};

export default TherapistForm;
