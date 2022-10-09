import Logo from '../Components/Utils/Logo'
import { StyledLink } from '../Components/Styles/StyledLink'
import { Data } from '../Fixtures/Data'
import './scss/Footer.css'

const Footer = () => {
  const {
    footer: { firstColumn, secondColumn, thirdColumn },
  } = Data

  return (
    <div className='footer-wrapper'>
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
    </div>
  )
}

export default Footer
