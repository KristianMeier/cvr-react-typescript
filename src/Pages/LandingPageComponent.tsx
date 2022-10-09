//TODO3
//@ts-nocheck
import SearchComponent from './SearchComponent'
import BasicComponent from './BasicComponent'
import { TitleType } from '../Components/Types'
import '../Layout/scss/LandingPage.css'
import '../Layout/scss/Review.css'
import Review from './Review'

const LandingPageComponent = ({ data }) => {
  const {
    structureData: { secondRow, thirdRow, fourthRow },
  } = data
  return (
    <>
      <SearchComponent />
      <div className='landingpage-wrapper'>
        <Review />
      </div>
      <div className='landingpage-wrapper'>
        {secondRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
      <div className='landingpage-wrapper'>
        {thirdRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
      <div className='landingpage-wrapper'>
        {fourthRow.map((item) => {
          const { id, title }: TitleType = item
          return <BasicComponent key={id} title={title} />
        })}
      </div>
    </>
  )
}

export default LandingPageComponent
