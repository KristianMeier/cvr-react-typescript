// @ts-nocheck
import styled from 'styled-components'

type SidebarLinkProps = {
  id: number
  title: string
}

const SidebarLink = ({ id, title, removeSidebarLink }: SidebarLinkProps) => {
  return (
    <Wrapper>
      <div className='container' key={id}>
        <h4>
          {title}
          <button onClick={() => removeSidebarLink(id)}>(slet)</button>
        </h4>
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
