import { useState } from 'react'
import CalcMain from './components/CalcMain'
//import Disbursment from './components/Disbursment'
import Hours from './components/Hours'
//import Nav from './components/Nav'
import Employees from './components/Employees'
import './App.css'

function App() {


  return (
    <>
      {/* <Nav /> */}
      <div className="container">
        <CalcMain />
        <Hours />
        <Employees />
        {/* <Disbursment />  */}
        
      </div>
    </>
  )
}

export default App
