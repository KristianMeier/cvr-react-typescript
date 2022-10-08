import Header from '../Layout/Header'
import SearchComponent from './LandingPage/SearchComponent'
import SecondRowDk from './LandingPage/SecondRowDk'
import ThirdRowDk from './LandingPage/ThirdRowDk'
import FourthRowDk from './LandingPage/FourthRowDk'
import BasicComponent from './LandingPage/BasicComponent'

const LandingPageDk = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <BasicComponent />
      {/* <SecondRowDk />
      <ThirdRowDk />
      <FourthRowDk /> */}
    </>
  )
}

export default LandingPageDk
