import "./App.css";
import { useState } from "react";
import flashcards from "./data/flashcards";
import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

return (
  <div className="container">
    <h1>JavaScript Flash Cards</h1>

    <ProgressBar
      currentCard={currentCard}
      totalCards={flashcards.length}
    />

    <FlashCard
      question={flashcards[currentCard].question}
      answer={flashcards[currentCard].answer}
      showAnswer={showAnswer}
    />
    
    {currentCard === flashcards.length - 1 && (
      <p className="complete-message">
       🎉 You've reached the last flashcard! Click Restart to study again. 
      </p>
    )}
    <div className="button-group">
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Show Question" : "Show Answer"}
      </button>

    <button
  disabled={currentCard === 0}
  onClick={() => {
    setCurrentCard(currentCard - 1);
    setShowAnswer(false);
  }}
>
  Previous Card
</button>

 <button
  disabled={currentCard === flashcards.length - 1}
  onClick={() => {
    setCurrentCard(currentCard + 1);
    setShowAnswer(false);
  }}
>
  Next Card
</button>
      <button
  onClick={() => {
    setCurrentCard(0);
    setShowAnswer(false);
  }}
>
  Restart
</button>
    </div>
  </div>
);
}
export default App;