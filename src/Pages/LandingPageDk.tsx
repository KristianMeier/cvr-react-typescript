import Header from '../Layout/Header'
import SearchComponent from './LandingPage/SearchComponent'
import BasicComponent from './LandingPage/BasicComponent'
import { DanishTitleType, DataDk } from '../Fixtures/DataDk'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'

const LandingPageDk = () => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = DataDk
  return (
    <>
      <Header />
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
  display: flex;
  gap: 1rem 2rem;
`
