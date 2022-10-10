//TODO3
//@ts-nocheck
import SearchComponent from './SearchComponent'
import Review from './Review'
import Accordition from './Accordition'
import { CenterComponent } from '../Design/CenterComponent'
import styled from 'styled-components'
import { ComponentContainer } from '../Design/ComponentContainer'
import PlaceholderContainer from '../Design/PlaceholderContainer'

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
          return <ComponentContainer />
        })}
      </Wrapper>
      <Wrapper>
        {thirdRow.map((item) => {
          return <ComponentContainer />
        })}
      </Wrapper>
      <Wrapper>
        {fourthRow.map((item) => {
          return <ComponentContainer />
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
