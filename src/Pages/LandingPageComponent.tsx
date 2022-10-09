//TODO3
//@ts-nocheck
import SearchComponent from './LandingPage/SearchComponent'
import BasicComponent from './LandingPage/BasicComponent'
import { TitleType } from '../Components/Types'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'

const LandingPageComponent = ({ data }) => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = data
  return (
    <>
      <SearchComponent />
      <Wrapper>
        {secondRow.map((item) => {
          const { id, title }: TitleType = item

          return <BasicComponent key={id} title={title} />
        })}
      </Wrapper>
      <Wrapper>
        {thirdRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </Wrapper>
      <Wrapper>
        {fourthRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </Wrapper>
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
