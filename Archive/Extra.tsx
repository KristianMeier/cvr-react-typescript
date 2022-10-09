// @ts-nocheck
import { Button } from 'react-bootstrap'
import '../Layout/scss/Extra.css'
import AllCollapseExample from './Bootstrap/Accorditions'
import BootstrapForm from './Bootstrap/BootstrapForm'
import BootStrapButtonGroup from './Bootstrap/ButtonGroup'
import RangeExample from './Bootstrap/RangeExample'
import ToastAnimation from './Bootstrap/ToastAnimation'
import BootstrapCard from './Bootstrap/BootstrapCard'
import BootstrapDropdown from './Bootstrap/BootstrapDropdown'
import BootstrapProgressBar from './Bootstrap/ProgressBar'
import BootstrapSpinner from './Bootstrap/BootstrapSpinner'
import BootstrapTable from './Bootstrap/BoostrapTable'
import BootstrapTabs from './Bootstrap/BootstrapTabs'
import BootstrapTooltip from './Bootstrap/BootstrapTooltip'

const Extra = () => {
  return (
    <div className='extra-wrapper'>
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
    </div>
  )
}

export default Extra
