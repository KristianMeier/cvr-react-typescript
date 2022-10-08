import PlaceholderContainer from '../../Components/PlaceholderContainer'
import styled from 'styled-components'
import { CenterComponent } from '../../Components/CenterComponent'
import { DanishTitleType, DataDk } from '../../Fixtures/DataDk'

export const ThirdRow = () => {
  const { thirdRow } = DataDk
  return (
    <Wrapper>
      {thirdRow.map((item) => {
        const { id, title }: DanishTitleType = item
        return <PlaceholderContainer id={id} title={title} />
      })}
    </Wrapper>
  )
}

export default ThirdRow

const Wrapper = styled(CenterComponent)`
  display: flex;
  gap: 1rem 2rem;
`
