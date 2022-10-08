import SearchComponent from './LandingPage/SearchComponent'
import BasicComponent from './LandingPage/BasicComponent'
import { DanishTitleType, DataDk } from '../Fixtures/Data'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'

const LandingPageDk = () => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = DataDk
  return (
    <>
      <SearchComponent />
      <Wrapper>
        {secondRow.map((item) => {
          const { id, title }: DanishTitleType = item
          return <BasicComponent id={id} title={title} />
        })}
      </Wrapper>
      <Wrapper>
        {thirdRow.map((item) => {
          const { id, title }: DanishTitleType = item
          return <BasicComponent id={id} title={title} />
        })}
      </Wrapper>
      <Wrapper>
        {fourthRow.map((item) => {
          const { id, title }: DanishTitleType = item
          return <BasicComponent id={id} title={title} />
        })}
      </Wrapper>
    </>
  )
}

export default LandingPageDk

const Wrapper = styled(CenterComponent)`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0 3rem;
  }
`
