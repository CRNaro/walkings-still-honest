import { useState, useEffect } from 'react'
import Cash from './components/Cash'
//import Disbursment from './components/Disbursment'
//import Hours from './components/Hours'
//import Nav from './components/Nav'
import Employees from './components/Employees'
import retroBarImg from './assets/imgs/retrobar.jpg';
import './App.css' 

function App() {
  const [totalCash, setTotalCash] = useState(0)
  //const [totalHours, setTotalHours] = useState(0)
  const [totalHoursEntered, setTotalHoursEntered] = useState(0)
  const [leftoverChange, setLeftoverChange] = useState(0)

  const hourlyRate = totalHoursEntered > 0 ? totalCash / totalHoursEntered : 0;

  useEffect(() => {
    document.body.style.backgroundImage = `url(${retroBarImg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }, []);


  return (
   
    <>
      {/* <Nav /> */}
      <div className="container">
        
       {/* <Hours totalHours={totalHours} setTotalHours={setTotalHours}/>*/}
        <Employees hourlyRate={hourlyRate} setTotalHoursEntered={setTotalHoursEntered} setLeftoverChange={setLeftoverChange} />  
        <Cash totalCash={totalCash} setTotalCash={setTotalCash}/>
        <p style={{ color: totalHoursEntered >= totalHoursEntered ? 'green' : 'red'}}>
          ${totalCash} cash / {totalHoursEntered} total hours worked = ${hourlyRate.toFixed(2)} per hour worked</p>
        <p>Total Leftover Change ${leftoverChange.toFixed(2)}</p>
        
        {/* <Disbursment />  */}
        </div>
      
    </>
   
  )
}

export default App
