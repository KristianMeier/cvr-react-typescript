import { accorditionData } from '../Fixtures/Data'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import '../Layout/scss/PlaceHolderContainer.css'
import '../Layout/scss/Accordition.css'

const Topic = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='topic'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

function Accordition() {
  return (
    <div className='placeholdercontainer-wrapper'>
      <div className='container-place'>
        <section className='info'>
          {accorditionData.map((topic) => {
            return <Topic key={topic.id} {...topic}></Topic>
          })}
        </section>
      </div>
    </div>
  )
}

export default Accordition
