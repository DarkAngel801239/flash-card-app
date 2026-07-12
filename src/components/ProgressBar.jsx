function ProgressBar({ currentCard, totalCards }) {
  const progress = ((currentCard + 1) / totalCards) * 100;

  return (
    <div className="progress">
      <p>
        Card {currentCard + 1} of {totalCards}
      </p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;