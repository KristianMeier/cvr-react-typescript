import PlaceholderContainer from '../../Components/PlaceholderContainer'
import styled from 'styled-components'
import { CenterComponent } from '../../Components/CenterComponent'

type BasicComponentProps = {
  id: number
  title: string
}

export const BasicComponent = ({ id, title }: BasicComponentProps) => {
  return <PlaceholderContainer id={id} title={title} />
}

export default BasicComponent
