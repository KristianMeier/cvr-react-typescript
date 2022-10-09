// @ts-nocheck

import PlaceholderContainer from './PlaceholderContainer'

// TODO1:
type BasicComponentProps = {
  id?: number
  title: string
}

export const BasicComponent = ({ id, title }: BasicComponentProps) => {
  return <PlaceholderContainer key={id} title={title} />
}

export default BasicComponent
