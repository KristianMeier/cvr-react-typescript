// @ts-nocheck
import { Button } from 'react-bootstrap'
import '../Layout/scss/Extra.css'
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
