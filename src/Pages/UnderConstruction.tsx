import styled from 'styled-components'
import { ComponentContainer } from './Design/ComponentContainer'

type ColoplastType = {
  title: string
}

const Coloplast = ({ title }: ColoplastType) => {
  return (
    <Wrapper>
      <h1> {title} </h1>
      <h4>Placeholder</h4>
    </Wrapper>
  )
}

export default Coloplast

const Wrapper = styled(ComponentContainer)`
  padding: 3rem;
`
