 import { BrowserRouter, Routes, Route} from 'react-router-dom'
 
 //Pages// 
 import Home from '../src/Pages/Home/Home' 
 import Projects from '../src/Pages/Projects/Projects'
 import Technologies from '../src/Pages/Technologies/Technologies'
 import About from '../src/Pages/About/About'


 function App() {


   return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={ <Projects/>} />
          <Route path="/Technologies" element={ <Technologies/>} />
          <Route path="/About" element={ <About/>} />
          
       </Routes>  
       
     </BrowserRouter>  
   )
}

export default App
