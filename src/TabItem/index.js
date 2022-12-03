import './index.css'

const TabItem = props => {
  const {each, clickOnTab} = props
  const {tabId, displayText} = each

  const getImages = () => {
    clickOnTab(tabId)
  }

  return (
    <li className="li-container">
      <button type="button" className="button" onClick={getImages}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
