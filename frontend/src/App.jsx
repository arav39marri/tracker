import { useState } from 'react'
import './App.css'
import Createuser from './Components/Createuser'
import Show from './Components/Show'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Allusers from './Components/Allusers'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Navbar/>
     <Routes>
                                     
      <Route path='/' element={<Home/>}/>       
      <Route path='/Createuser' element={<Createuser/>}/>
      <Route path='/Show' element={<Show/>}/>
      <Route path='/Allusers' element={<Allusers/>}/>
     </Routes>
        
    
  </>
    
  )
}

export default App
/*


*/ 