import { useState } from 'react'
import Cash from './components/Cash'
//import Disbursment from './components/Disbursment'
import Hours from './components/Hours'
//import Nav from './components/Nav'
import Employees from './components/Employees'
import './App.css'

function App() {
  const [totalCash, setTotalCash] = useState(0)
  const [totalHours, setTotalHours] = useState(0)
  const [totalHoursEntered, setTotalHoursEntered] = useState(0)

  const hourlyRate = totalHours > 0 ? totalCash / totalHours : 0;

  return (
    <>
      {/* <Nav /> */}
      <div className="container">
        <Cash totalCash={totalCash} setTotalCash={setTotalCash}/>
        <Hours totalHours={totalHours} setTotalHours={setTotalHours}/>
        <Employees hourlyRate={hourlyRate} setTotalHoursEntered={setTotalHoursEntered}  />  
        <p style={{ color: totalHoursEntered >= totalHours ? 'black' : 'red'}}>
          ${totalCash} cash / {totalHours} total hours worked = ${hourlyRate.toFixed(2)} per hour worked</p>
        {/* <Disbursment />  */}
        
      </div>
    </>
  )
}

export default App
