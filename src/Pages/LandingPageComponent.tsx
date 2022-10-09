//TODO3
//@ts-nocheck
import SearchComponent from './LandingPage/SearchComponent'
import BasicComponent from './LandingPage/BasicComponent'
import { TitleType } from '../Components/Types'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import '../Layout/scss/LandingPage.css'

const LandingPageComponent = ({ data }) => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = data
  return (
    <>
      <SearchComponent />
      <div className='landingpage-wrapper'>
        {secondRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
      <div className='landingpage-wrapper'>
        {thirdRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
      <div className='landingpage-wrapper'>
        {fourthRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
    </>
  )
}

export default LandingPageComponent

const Wrapper = styled(CenterComponent)`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0 3rem;
  }
`
