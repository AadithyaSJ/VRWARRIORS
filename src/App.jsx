
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'

import About from './Pages/About'
import Navbar from './Components/Navbar'
import Experience from './Pages/Experience'
import Products from './Pages/Products'

function App() {
  
  
  return (
    <Router>
      <div className='relative'>
       <Navbar/>
       <div className="relative z-10 pt-20">
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/experience' element={<Experience/>}/>
       </Routes>
       </div>
       </div>
      
      
       
    </Router>
      
  )
}

export default App
