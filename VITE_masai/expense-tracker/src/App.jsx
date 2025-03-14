import React from 'react'
import NavBar from '../components/common/NavBar'
import { Routes ,Route} from 'react-router-dom'
import DashBoard from './Pages/DashBoard'
import Analytics from './Pages/Analytics'

const App = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<DashBoard/>}/>
    <Route path='/history' element={<History/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
   </Routes>
   </>
  )
}

export default App