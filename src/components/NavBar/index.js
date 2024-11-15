import './index.css'

const NavBar = props => {
  console.log('Sas')
  const {score, topScore} = props
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          className="emoji-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {score !== 12 && (
        <div className="nav-section scores-section">
          <p className="total-score">Score: {score}</p>
          <p className="max-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
