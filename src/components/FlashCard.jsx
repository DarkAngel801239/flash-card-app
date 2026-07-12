function FlashCard({ question, answer, showAnswer }) {
  return (
    <div className={`card ${showAnswer ? "flipped" : ""}`}>
      <div className="card-content">
        <h2>{showAnswer ? answer : question}</h2>
      </div>
    </div>
  );
}

export default FlashCard;