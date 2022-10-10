// @ts-nocheck
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { annualReportFacts } from '../Fixtures/JsData'
import styled from 'styled-components'

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
    <Wrapper>
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
    </Wrapper>
  )
}

export default Review

const Wrapper = styled.div`
  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    transition: var(--transition);
    color: black;

    &:hover {
      transform: scale(1.05);
    }
  }

  .author {
    margin-bottom: 0.25rem;
  }
  .info {
    margin-bottom: 0;
  }
  .previous-btn,
  .next-btn {
    color: grey;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    justify-content: end;
  }
  .previous-btn:hover,
  .next-btn:hover {
    color: black;
  }

  h4 {
    letter-spacing: 0.1rem;
    line-height: 1.25;
    align-self: flex-start;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`
