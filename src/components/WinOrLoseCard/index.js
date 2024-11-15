import './index.css'

const WinCard = ({score, onClickPlayAgain}) => {
  console.log('d')
  return (
    <div className="win-loss-status">
      <img
        className="win-status-img"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
      <div>
        <h1 className="result-status-heading">You Won</h1>
        <p className="result-status">Best Score</p>
        <p className="result-score">{score}/12</p>
        <button onClick={onClickPlayAgain} className="play-again" type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

const LoseCard = ({score, onClickPlayAgain, topScore}) => {
  console.log(`${score} ${score}`)
  return (
    <div className="win-loss-status">
      <img
        className="win-status-img"
        alt="win or lose"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
      <div>
        <h1 className="result-status-heading">You Lose</h1>
        <p className="result-status">
          {score === topScore ? 'Best Score' : 'Score'}
        </p>
        <p className="result-score">{score}/12</p>
        <button onClick={onClickPlayAgain} className="play-again" type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

const WinOrLoseCard = props => {
  const {winStatus, score, restartGame, topScore} = props
  return winStatus === true ? (
    <WinCard onClickPlayAgain={restartGame} score={score} />
  ) : (
    <LoseCard
      onClickPlayAgain={restartGame}
      score={score}
      topScore={topScore}
    />
  )
}

export default WinOrLoseCard
