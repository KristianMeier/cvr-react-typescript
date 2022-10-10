import { accorditionData } from '../Fixtures/Data'
import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ComponentContainer } from '../Design/ComponentContainer'

type TopicType = {
  title: string
  info: string
}

const Topic = ({ title, info }: TopicType) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <TopicContainer>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </TopicContainer>
  )
}

const TopicContainer = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  align-self: stretch;

  h4 {
    text-transform: none;
    line-height: 1.5;
  }

  p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  header h4 {
    margin-bottom: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: #eae6eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
`

function Accordition() {
  return (
    <AccorditionWrapper>
      <div className='container-place'>
        <section className='info'>
          {accorditionData.map((topic) => {
            return <Topic key={topic.id} {...topic}></Topic>
          })}
        </section>
      </div>
    </AccorditionWrapper>
  )
}

export default Accordition

const AccorditionWrapper = styled(ComponentContainer)`
  .info {
    flex-shrink: 1;
  }
`
