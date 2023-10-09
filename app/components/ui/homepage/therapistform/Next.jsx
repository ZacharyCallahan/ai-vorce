const Next = ({ currentQuestion, setCurrentQuestion, questionsLength }) => {
    const handleNext = () => {
        // adds 1 to the currentQuestion state value to move to the next question
        if (questionsLength > currentQuestion + 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    return (
        // calls the handleNext function passed down from props when the button is clicked
        <button
            type="button"
            onClick={handleNext}
            className="bg-primary shadow-md text-white font-bold py-2 px-4 rounded">
            Next
        </button>
    );
};

export default Next;