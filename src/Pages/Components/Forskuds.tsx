import { accorditionData } from '../../Fixtures/Data'
import { ComponentContainer } from '../Design/ComponentContainer'
import { ForskudsTopic } from './ForskudsTopic'

function Forskuds() {
  return (
    <ComponentContainer>
      <section className='info'>
        {accorditionData.map((topic) => {
          return <ForskudsTopic key={topic.id} {...topic}></ForskudsTopic>
        })}
      </section>
    </ComponentContainer>
  )
}

export default Forskuds
