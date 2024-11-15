import './index.css'

const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickSelectEmoji = () => {
    selectedEmoji(id)
  }
  console.log(emojiName)
  return (
    <li key={id} className="each-emoji">
      <button className="emoji-btn" type="button" onClick={onClickSelectEmoji}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
