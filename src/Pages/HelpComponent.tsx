// @ts-nocheck
import { useState } from 'react'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import SidebarLink from '../Components/SidebarLink'

const HelpComponent = ({ data }) => {
  const [readMore, setReadMore] = useState(true)
  const { sidebarLinks, loremTwentyFive, loremHundred } = data
  return (
    <Wrapper>
      <div className='sidebar'>
        {sidebarLinks.map((item) => {
          const { id, title } = item
          return <SidebarLink key={id} title={title} />
        })}
      </div>
      <div className='content'>
        <h1>Lorem, ipsum.</h1>
        <h3>{loremTwentyFive.text} </h3>
        <h5>
          {readMore
            ? loremHundred.text
            : `${loremHundred.text.substring(0, 200)}...  `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Vis mindre' : 'Vis resten'}
          </button>
        </h5>
      </div>
    </Wrapper>
  )
}

export default HelpComponent

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;

  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    transition: var(--transition);
    color: darkblue;
  }

  button:hover {
    transform: scale(1.05);
  }

  h1 {
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  h5 {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .sidebar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      display: block;
      flex-basis: 30%;
      padding: 1rem;
      border: 2px solid black;
    }
    display: flex;
    justify-content: flex-start;
  }

  .content {
    flex-basis: 70%;
    padding: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`
