import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LandingPageEng from './Pages/LandingPageEng'
import Page from './Pages/Page'
import Layout from './Layout/Layout'
import LandingPageDk from './Pages/LandingPageDk'
import Help from './Pages/Help'
import AppTwo from './AppTwo'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<LandingPageDk />} /> */}
        <Route index element={<AppTwo />} />
        <Route path='danish' element={<LandingPageDk />} />
        <Route path='english' element={<LandingPageEng />} />
        <Route path='help' element={<Help />} />
        <Route path=':routeParams' element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
