import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Page from './Pages/Page'
import Layout from './Layout/Layout'
import LandingPageDk from './Pages/LandingPage'
import Help from './Pages/Help'
import AppTwo from './AppTwo'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<LandingPageDk />} /> */}
        <Route index element={<AppTwo />} />
        <Route path='help' element={<Help />} />
        <Route path=':routeParams' element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
