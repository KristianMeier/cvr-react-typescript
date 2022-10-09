// @ts-nocheck
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import { Data } from '../Fixtures/Data'
import { JsData } from '../Fixtures/JsData'
import BasicComponent from './LandingPage/BasicComponent'

const Extra = () => {
  const { extra } = JsData
  return (
    <Wrapper>
      {extra.map((item) => {
        const { id, title }: TitleType = item

        return <BasicComponent key={id} title={title} />
      })}
    </Wrapper>
  )
}

export default Extra

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;
`
