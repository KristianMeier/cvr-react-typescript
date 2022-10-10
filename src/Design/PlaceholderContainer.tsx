import styled from 'styled-components'
import { ComponentContainer } from './ComponentContainer'
import { PageComponenet } from './PageComponent'

//TODO2
type PlaceholderContainerProps = { id?: number; title: string }

const PlaceholderContainer = ({ id, title }: PlaceholderContainerProps) => {
  return (
    <ComponentContainer>
      <div className='container-place' key={id}>
        <h3>{title}</h3>
      </div>
    </ComponentContainer>
  )
}

export default PlaceholderContainer

const Wrapper = styled(ComponentContainer)``
