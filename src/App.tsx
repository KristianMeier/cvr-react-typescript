import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Page from './Pages/Page'
import Layout from './Pages/Layout/Layout'
import LandingPage from './Pages/LandingPage'
import Help from './Pages/Help'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='help' element={<Help />} />
        <Route path=':routeParams' element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
