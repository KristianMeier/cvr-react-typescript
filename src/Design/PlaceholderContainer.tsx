import styled from 'styled-components'
import { PageComponenet } from './PageComponent'

//TODO2
type PlaceholderContainerProps = { id?: number; title: string }

const PlaceholderContainer = ({ id, title }: PlaceholderContainerProps) => {
  return (
    <Wrapper>
      <div className='container-place' key={id}>
        <h3>{title}</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(PageComponenet)`
  justify-content: right;
  align-items: center;
  height: 220px;
  padding: 1rem;
  h3 {
    text-align: center;
    margin-top: 2.5rem;
    font-weight: 300;
  }
  p {
    display: inline;
  }
  .filter {
    margin-top: 1rem;
    text-align: right;
  }
  .container-place {
    padding: 1rem;
  }
`

export default PlaceholderContainer
