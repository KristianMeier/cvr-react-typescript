import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import SidebarLink from '../Components/SidebarLink'
import { DataDk } from '../Fixtures/Data'

const Help = () => {
  const { sidebarLinks, loremTwentyFive, loremHundred } = DataDk
  return (
    <Wrapper>
      <div className='sidebar'>
        {sidebarLinks.map((item) => {
          const { id, title } = item
          return <SidebarLink id={id} title={title} />
        })}
      </div>
      <div className='content'>
        <h1>Lorem, ipsum.</h1>
        <h3>{loremTwentyFive.text} </h3>
        <h5>{loremHundred.text} </h5>
        <h5>{loremHundred.text} </h5>
      </div>
    </Wrapper>
  )
}

export default Help

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;

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
