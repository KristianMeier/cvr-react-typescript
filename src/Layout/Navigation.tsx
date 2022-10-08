import styled from 'styled-components'
import { Icon } from '../Components/Icon'
import Logo from '../Components/Logo'
import { StyledLink } from '../Components/StyledLink'
import { DataEng } from '../Fixtures/DataEng'

const Navigation = () => {
  const {
    navbar: { textIcons },
  } = DataEng

  return (
    <Wrapper>
      <picture>
        <Logo />
      </picture>

      {textIcons.map((item) => (
        <StyledLink key={item.id} {...item} />
      ))}
      {textIcons.map((item) => (
        <Icon key={item.id} {...item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  height: 6rem;
  width: 100%;
  display: flex;
  border: none;
  padding: 2rem;
  box-shadow: 0 0 10px 0 #888888;
  gap: 1rem;
  background-color: white;

  p {
    flex-shrink: 0;
    overflow-wrap: break-word;
    font-size: 2rem;
  }

  picture {
    flex: 40%;
    font-size: 1.5rem;
    align-self: center;
  }

  h6,
  p {
    align-self: center;
    font-size: 1rem;
    display: inline-block;
    margin-right: 0;
  }

  a {
    display: none;
  }

  @media screen and (min-width: 768px) {
    a {
      align-self: center;
      font-size: 1rem;
      display: inline-block;
      margin-right: 0;
    }
    p {
      display: none;
    }
  }
`

export default Navigation
