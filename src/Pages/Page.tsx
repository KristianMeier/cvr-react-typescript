import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Components/Styles/Button'
import { ComponentContainer } from './Design/ComponentContainer'
import Help from './Help'
import Coloplast from './UnderConstruction'

const Page = () => {
  const { routeParams } = useParams()
  if (routeParams === 'searchresult') {
    return <Coloplast title='Search Results' />
  }
  if (routeParams === 'coloplast') {
    return <Coloplast title='coloplast' />
  }
  if (routeParams === 'help') {
    return <Help />
  }

  return (
    <Wrapper>
      <h1>Dette er routeParams</h1>
      <h3>{routeParams}</h3>
      <h6>Denne side er generisk.</h6>
      <Button title='Landing Page' link='/' />
    </Wrapper>
  )
}

const Wrapper = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 4rem;
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    margin-top: 0.75rem;
    cursor: pointer;
  }

  h5 {
    margin-top: 0.25rem;
  }
`

export default Page
