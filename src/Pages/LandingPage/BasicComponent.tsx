import PlaceholderContainer from '../../Components/PlaceholderContainer'

type BasicComponentProps = {
  id: number
  title: string
}

export const BasicComponent = ({ id, title }: BasicComponentProps) => {
  return <PlaceholderContainer id={id} title={title} />
}

export default BasicComponent
