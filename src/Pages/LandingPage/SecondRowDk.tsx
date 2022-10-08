import PlaceholderContainer from '../../Components/PlaceholderContainer'
import styled from 'styled-components'
import { CenterComponent } from '../../Components/CenterComponent'

export const SecondRowDk = () => {
  return (
    <Wrapper>
      {Da}

      <PlaceholderContainer title='Second Row' />
    </Wrapper>
  )
}

export default SecondRowDk

const Wrapper = styled(CenterComponent)`
  display: flex;
  gap: 1rem 2rem;
`
