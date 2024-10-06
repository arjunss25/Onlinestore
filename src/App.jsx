import React from 'react'
import MainNavbar from './Components/MainNavbar'
import Secondarynavbar from './Components/Secondarynavbar'
import Home from './Pages/Home'
import Products from './Pages/Products'

const App = () => {
  return (
    <div>
      <MainNavbar/>
      <Secondarynavbar/>
      <Home/>
      

    </div>
  )
}

export default App