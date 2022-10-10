import { StyledLink } from '../Components/Styles/StyledLink'
import { Data } from '../Fixtures/Data'
import styled from 'styled-components'
import { CenterComponent } from '../Design/CenterComponent'

const Header = () => {
  const {
    title: { mainTitle, titleLinks },
  } = Data

  return (
    <>
      <div className='header-wrapper'>
        <h1>{mainTitle} </h1>
      </div>
      <div className='link-wrapper'>
        {titleLinks.map((item) => (
          <StyledLink linktype='top' size='1.2rem' key={item.id} {...item} />
        ))}
        <hr />
      </div>
    </>
  )
}

export default Header

const Wrapper = styled(CenterComponent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  h1 {
    font-size: 1.33rem;
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 1.66rem;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const Links = styled(CenterComponent)`
  align-self: flex-start;
  p {
    color: red;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 24rem;
  }
`
