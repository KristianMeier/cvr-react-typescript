import { StyledLink } from '../Components/Styles/StyledLink'
import { Data } from '../Fixtures/Data'
import './scss/Header.css'

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
