import styled from 'styled-components'

type SidebarLinkProps = {
  id: number
  title: string
}

const SidebarLink = ({ id, title }: SidebarLinkProps) => {
  return (
    <Wrapper>
      <div key={id}>
        <h4> {title} </h4>
      </div>
      <hr />
    </Wrapper>
  )
}

export default SidebarLink

const Wrapper = styled.div`
  h4 {
    line-height: 2.5rem;
  }
`
