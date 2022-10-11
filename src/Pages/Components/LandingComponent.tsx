//TODO3
//@ts-nocheck

import { CenterComponent } from '../Design/CenterComponent'
import styled from 'styled-components'
import Review from './Review'
import Forskuds from './Forskuds'
import SearchComponent from './SearchComponent'
import Placeholder from './PlaceholderComponent'

const LandingComponent = ({ data }) => {
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
        <Forskuds />
      </Wrapper>
      {/* TODO19 */}
      <Wrapper>
        {secondRow.map((item) => {
          return <Placeholder />
        })}
      </Wrapper>
      <Wrapper>
        {thirdRow.map((item) => {
          return <Placeholder />
        })}
      </Wrapper>
      <Wrapper>
        {fourthRow.map((item) => {
          return <Placeholder />
        })}
      </Wrapper>
    </>
  )
}

export default LandingComponent

const Wrapper = styled(CenterComponent)`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0 3rem;
  }
`
