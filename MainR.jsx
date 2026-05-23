import React from 'react'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nopage from'./Nopage'
function MainR(){
   return(
      <>
      <Router>
         <div class='main-route'>
            <ul>
               <li>
                  <Link to='/'>Home</Link>
               </li>
               <li>
                  <Link to='/Contact'>Contact</Link>
               </li>
               <li >
               <Link to='/About'>About</Link>
               </li>
            </ul>
         </div>
         <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='About' element={<About/>}/>
            <Route path ="*" element={<Nopage/>}/>

         </Routes>
      </Router>
      </>
   )
}
export default MainR
