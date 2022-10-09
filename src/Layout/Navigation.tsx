import { Icon } from '../Components/Styles/Icon'
import Logo from '../Components/Utils/Logo'
import { StyledLink } from '../Components/Styles/StyledLink'
import { Data } from '../Fixtures/Data'
import './scss/Navigation.css'

const Navigation = () => {
  const {
    navbar: { textIcons },
  } = Data

  return (
    <div className='navigation-wrapper'>
      <picture>
        <Logo />
      </picture>
      {textIcons.map((item) => (
        <StyledLink key={item.id} {...item} />
      ))}
      {textIcons.map((item) => (
        <Icon key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Navigation
