import styled from 'styled-components'
import { PageComponenet } from './PageComponent'

type PlaceholderContainerProps = { id: number; title: string }

const PlaceholderContainer = ({ id, title }: PlaceholderContainerProps) => {
  return (
    <Wrapper>
      <div key={id}>
        <h1>{title}</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(PageComponenet)`
  justify-content: right;
  align-items: center;
  height: 220px;

  h1 {
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
`

export default PlaceholderContainer
