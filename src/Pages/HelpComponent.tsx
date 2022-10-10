// @ts-nocheck
import { useState } from 'react'
import SidebarLink from '../Components/Styles/SidebarLink'
import { JsData } from '../Fixtures/JsData'
import '../Layout/scss/Help.css'
import ButtonNoLink from '../Components/Styles/ButtonNoLink'

const HelpComponent = ({ data, removeSidebarLink, clearData }) => {
  const [readMore, setReadMore] = useState(true)
  const { loremTwentyFive, loremHundred } = JsData

  return (
    <div>
      <div className='help-wrapper'>
        <div className='sidebar'>
          {data.map((item) => {
            const { id, title } = item
            return (
              <SidebarLink
                key={id}
                id={id}
                title={title}
                removeSidebarLink={removeSidebarLink}
              />
            )
          })}
          <button onClick={clearData}> Clear Data</button>
        </div>
        <div className='content'>
          <h1>Dette er en titel</h1>
          <h3>{loremTwentyFive.text}</h3>
          <h5>
            {readMore
              ? loremHundred.text
              : `${loremHundred.text.substring(0, 200)}...  `}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Vis mindre' : 'Vis resten'}
            </button>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default HelpComponent
