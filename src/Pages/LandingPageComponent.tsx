//TODO3
//@ts-nocheck
import SearchComponent from './SearchComponent'
import BasicComponent from './BasicComponent'
import { TitleType } from '../Components/Types'
import Review from './Review'
import Accordition from './Accordition'
import { CenterComponent } from '../Design/CenterComponent'
import styled from 'styled-components'

const LandingPageComponent = ({ data }) => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = data
  return (
    <>
      <SearchComponent />
      <Wrapper>
        <Review />
      </Wrapper>
      <Wrapper>
        <Accordition />
      </Wrapper>
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
