import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    allEmojiesList: emojisList.sort(() => Math.random() - 0.5),
    choosedEmojies: [],
    isGameOver: false,
    winStatus: false,
    score: 0,
    topScore: 0,
  }

  selectedEmoji = id => {
    const {score} = this.state
    this.setState(prevState => {
      const idx = prevState.choosedEmojies.findIndex(eachId => eachId === id)

      return idx === -1
        ? {
            allEmojiesList: emojisList.sort(() => Math.random() - 0.5),
            choosedEmojies: [...prevState.choosedEmojies, id],
            score: prevState.score + 1,
          }
        : {
            allEmojiesList: emojisList.sort(() => Math.random() - 0.5),
            choosedEmojies: [],
            isGameOver: true,
            topScore: prevState.topScore < score ? score : prevState.topScore,
          }
    })
    const {choosedEmojies} = this.state
    if (choosedEmojies.length === 11)
      this.setState({
        allEmojiesList: emojisList.sort(() => Math.random() - 0.5),
        isGameOver: true,
        winStatus: true,
        topScore: 12,
      })
  }

  playAgain = () => {
    this.setState(prevState => ({
      allEmojiesList: emojisList.sort(() => Math.random() - 0.5),
      choosedEmojies: [],
      isGameOver: false,
      winStatus: false,
      score: 0,
      topScore: prevState.topScore,
    }))
  }

  render() {
    const {
      choosedEmojies,
      isGameOver,
      winStatus,
      score,
      topScore,
      allEmojiesList,
    } = this.state
    console.log(choosedEmojies)
    const hideEmojiDisplayClassName = isGameOver
      ? 'emoji-display hide-emoji-display'
      : 'emoji-display'
    return (
      <div className="emoji-game-page">
        <NavBar score={score} topScore={topScore} />
        <div className="emojies-section">
          {isGameOver !== true ? (
            <ul className={hideEmojiDisplayClassName}>
              {allEmojiesList.map(eachEmoji => (
                <EmojiCard
                  selectedEmoji={this.selectedEmoji}
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              restartGame={this.playAgain}
              score={score}
              winStatus={winStatus}
              topScore={topScore}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
