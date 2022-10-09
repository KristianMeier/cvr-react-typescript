// @ts-nocheck
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import '../Layout/scss/Examples/Extra.css'
import AllCollapseExample from '../Components/Styles/Bootstrap/Accorditions'
import BootstrapForm from '../Components/Styles/Bootstrap/BootstrapForm'
import BootStrapButtonGroup from '../Components/Styles/Bootstrap/ButtonGroup'
import RangeExample from '../Components/Styles/Bootstrap/RangeExample'
import ToastAnimation from '../Components/Styles/Bootstrap/ToastAnimation'
import BootstrapCard from '../Components/Styles/Bootstrap/BootstrapCard'
import BootstrapDropdown from '../Components/Styles/Bootstrap/BootstrapDropdown'
import BootstrapProgressBar from '../Components/Styles/Bootstrap/ProgressBar'
import BootstrapSpinner from '../Components/Styles/Bootstrap/BootstrapSpinner'
import BootstrapTable from '../Components/Styles/Bootstrap/BoostrapTable'
import BootstrapTabs from '../Components/Styles/Bootstrap/BootstrapTabs'
import BootstrapTooltip from '../Components/Styles/Bootstrap/BootstrapTooltip'

const Extra = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Button>React Bootstrap</Button>
        <button className='blue-button'>Customer SCSS</button>
      </div>
      <div className='container'>
        <AllCollapseExample />
      </div>
      <div className='container'>
        <BootStrapButtonGroup />
      </div>
      <div className='container'>
        <BootstrapForm />
      </div>
      <div className='container'>
        <BootStrapButtonGroup />
      </div>
      <div className='container'>
        <RangeExample />
      </div>
      <div className='container'>
        <ToastAnimation />
      </div>
      <div className='container'>
        <BootstrapCard />
      </div>
      <div className='container'>
        <BootstrapDropdown />
      </div>

      <div className='container'>
        <BootstrapProgressBar />
      </div>

      <div className='container'>
        <BootstrapSpinner />
      </div>

      <div className='container'>
        <BootstrapTable />
      </div>

      <div className='container'>
        <BootstrapTabs />
      </div>

      <div className='container'>
        <BootstrapTooltip />
      </div>
    </Wrapper>
  )
}

export default Extra

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;

  .container {
    background-color: white;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    padding: 2rem;
  }
`
