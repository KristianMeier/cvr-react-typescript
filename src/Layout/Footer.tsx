import Logo from '../Components/Utils/Logo'
import { StyledLink } from '../Components/Styles/StyledLink'
import { Data } from '../Fixtures/Data'
import styled from 'styled-components'

const Footer = () => {
  const {
    footer: { firstColumn, secondColumn, thirdColumn },
  } = Data

  return (
    <Wrapper>
      <section className='footer-section'>
        <Logo />
      </section>
      <section className='footer-section'>
        {firstColumn.map((item, index) => {
          return (
            <StyledLink
              odd={(index + 1) % 2 !== 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
        <hr />
      </section>
      <section className='footer-section'>
        {secondColumn.map((item, index) => {
          return (
            <StyledLink
              first={index === 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
        <hr />
      </section>
      <section className='footer-section'>
        {thirdColumn.map((item, index) => {
          return (
            <StyledLink
              first={index === 0}
              linktype='footer'
              {...item}
              key={item.id}
              size='1rem'
            />
          )
        })}
      </section>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  min-height: 19rem;
  width: 100%;
  display: flex;
  border: none;
  padding: 10px;
  box-shadow: 0 0 10px 0 #888888;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 3rem;
  .footer-section {
    font-size: 1.5rem;
    align-self: flex-start;
    margin-top: 0.75rem;
    margin-left: 2rem;
  }
  hr {
    margin-top: 2rem;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    .footer-section {
      flex: 0 0 43%;
    }
    hr {
      display: none;
    }
  }
  @media screen and (min-width: 992px) {
    flex-wrap: nowrap;
    .footer-section {
      flex: 0 0 calc(25% - 2rem);
      margin-top: 5rem;
    }
  }
`
