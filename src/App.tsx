import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LandingPageEng from './Pages/LandingPageEng'
import Page from './Pages/Page'
import Layout from './Layout/Layout'
import LandingPageDk from './Pages/LandingPageDk'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPageEng />} />
        <Route path='danish' element={<LandingPageDk />} />
        <Route path=':routeParams' element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
