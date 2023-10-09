const Prev = ({ currentQuestion, setCurrentQuestion, questionsLength }) => {
    const handlePrev = () => {
        // subtracts 1 from the currentQuestion state value to move to the previous question
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };
    return (
        // calls the handlePrev function passed down from props when the button is clicked
        <button
            type="button"
            onClick={handlePrev}
            className="bg-primary shadow-md text-white font-bold py-2 px-4 rounded">
            Prev
        </button>
    );
};

export default Prev;
