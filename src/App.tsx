import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Catch from "./Pages/Catch";
import Help from "./Pages/Help";
import Landing from "./Pages/Landing";
import Layout from "./Pages/Layout/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="help" element={<Help />} />
        <Route path=":routeParams" element={<Catch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
