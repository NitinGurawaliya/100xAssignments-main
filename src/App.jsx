

import { BrowserRouter, Routes ,Route} from "react-router-dom"
import {  Dashboard } from "./Pages/Dashboard"
import Landing from "./Pages/Landing"
import { Week2Easy } from "./Pages/Week2Easy"
import { Week2Medium } from "./Pages/Week2Medium"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/web-assignments" element={<Dashboard />} />
        <Route path="/week2/easy" element={<Week2Easy />} />
        <Route path="/week2/medium" element={<Week2Medium />} />


      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App