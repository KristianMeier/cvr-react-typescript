// @ts-nocheck
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { annualReportFacts } from '../Fixtures/JsData'
import '../Layout/scss/PlaceHolderContainer.css'
import '../Layout/scss/Review.css'

const Review = () => {
  const [readMore, setReadMore] = useState(false)
  const [index, setIndex] = useState(0)
  const { title, text } = annualReportFacts[index]

  const checkArrayIndex = (arrayIndex) => {
    const lastArrayIndex = annualReportFacts.length - 1
    const firstFactIndex = 0

    if (arrayIndex > lastArrayIndex) {
      return firstFactIndex
    }
    if (arrayIndex < firstFactIndex) {
      return lastArrayIndex
    }
    return arrayIndex
  }
  const nextFact = () => {
    setIndex((arrayIndex) => {
      const newArrayIndex = arrayIndex + 1
      return checkArrayIndex(newArrayIndex)
    })
  }
  const previousFact = () => {
    setIndex((arrayIndex) => {
      const newArrayIndex = arrayIndex - 1
      return checkArrayIndex(newArrayIndex)
    })
  }

  return (
    <div className='placeholdercontainer-wrapper'>
      <div className='container-place'>
        <h4 className='author'>{title}</h4>
        <p className='info'>
          {readMore ? text : `${text.substring(0, 350)}...  `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Vis mindre' : 'Vis resten'}
          </button>
        </p>
        <div className='button-container'>
          <button className='previous-btn' onClick={previousFact}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextFact}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review
