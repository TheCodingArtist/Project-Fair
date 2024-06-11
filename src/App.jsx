
import {  Route, Routes   } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Footer from'./components/Footer'
function App() {
  return (
    <>
      <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth insideRegister={true}/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
export default App
