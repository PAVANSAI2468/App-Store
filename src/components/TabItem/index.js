// Write your code here
import './index.css'

const TabItem = props => {
  const {details, getActiveTab} = props
  const {displayText, tabId} = details

  const onclickTab = () => {
    getActiveTab(tabId)
  }
  return (
    <li className="tab-Items">
      <p onClick={onclickTab}>{displayText}</p>
    </li>
  )
}

export default TabItem
