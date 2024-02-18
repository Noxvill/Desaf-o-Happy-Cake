import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar.jsx'
import Contacto from './components/Contacto.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainContainer'>
      <div className='navBar'>
      <Menubar/>
      </div>
<div className='content'>

<Home/>

</div>

      </div>
    </>
  )
}

export default App
