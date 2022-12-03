import './index.css'

const Image = props => {
  const {couple, clickImage} = props
  const {thumbnailUrl} = couple

  const bringImage = () => {
    clickImage()
  }

  return (
    <li className="li-container">
      <button type="button" onClick={bringImage} className="button">
        <img src={thumbnailUrl} alt="thumbnail" className="small-picture" />
      </button>
    </li>
  )
}
export default Image
