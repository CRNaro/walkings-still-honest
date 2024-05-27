import { useEffect, useState } from 'react';
import '../style/Employees.css';
import Typography from '@mui/material/Typography';


function Employees({ hourlyRate, setTotalHoursEntered, totalCash, totalRounded, setLeftoverChange}) {
  const [numEmployees, setNumEmployees] = useState(0);
  const [employeeNames, setEmployeeNames] = useState([]);

  const handleNumChange = (e) => {
    const newNumEmployees = e.target.value;
    if (newNumEmployees > numEmployees) {
      const newEmployees = Array.from({ length: newNumEmployees - numEmployees }, () => ({ name: '', hours: '' }));
      setEmployeeNames([...employeeNames, ...newEmployees]);
    } else {
      setEmployeeNames(employeeNames.slice(0, newNumEmployees));
    }
    setNumEmployees(newNumEmployees);
  };

  const handleEmployeeChange = (index, field) => (e) => {
    const newEmployees = [...employeeNames];
    newEmployees[index][field] = e.target.value;
    setEmployeeNames(newEmployees);
  };
  // const handleNumChange = (e) => {
  //   const newNumEmployees = e.target.value;
  //   if (newNumEmployees > numEmployees) {
  //     const newEmployees = Array.from({ length: newNumEmployees - numEmployees }, () => ({ name: '', hours: '' }));
   
  //   // setNumEmployees(e.target.value);
  //   // setEmployeeNames(Array.from({ length: e.target.value }, () => ({ name: '', hours: '' })));
  //   setEmployeeNames([...employeeNames, ...newEmployees]);
  // }else{
  //   setEmployeeNames(employeeNames.slice(0, newNumEmployees));
  // }
  // const handleEmployeeChange = (index, field) => (e) => {
  //   const newEmployees = [...employeeNames];
  //   newEmployees[index][field] = e.target.value;
  //   setNumEmployees(newEmployees);
  // };

  useEffect(() => {
    const totalHours = employeeNames.reduce((total, employee) => total + Number(employee.hours), 0);
    setTotalHoursEntered(totalHours);
    let totalLeftover = 0;
    employeeNames.forEach(employee => {
      const cashToReceive = employee.hours * hourlyRate;
      const { leftoverChange } = calculatePayment(cashToReceive, totalCash, totalRounded);
      totalLeftover += leftoverChange;
    });
    setLeftoverChange(totalLeftover);
}, [employeeNames, setTotalHoursEntered, hourlyRate, totalCash, setLeftoverChange]);

  const calculatePayment = (amount, totalCash, totalRounded) => {
    let roundedAmount = 0;
    let leftoverChange = 0;

  if (amount > 0) {
    const decimalPart = amount % 1;
    const integerPart = Math.floor(amount);
  
    if (decimalPart >= 0.75 && integerPart + 1 + totalRounded <= totalCash) {
      roundedAmount = integerPart + 1;
      leftoverChange = 1 - decimalPart;
    } else {
      roundedAmount = integerPart;
      leftoverChange = decimalPart
    }
  }
    return { roundedAmount, leftoverChange };
  }


  return (
    <div>
      <div className="select-container">
        Select Number of Employees:
        <select className="select" value={numEmployees} onChange={handleNumChange}>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      {employeeNames.map((employee, index) => {
        const cashToReceive = employee.hours * hourlyRate;
        const { roundedAmount, leftoverChange } = calculatePayment(cashToReceive, totalCash, totalRounded);
        totalRounded += roundedAmount;
        return (
          <div key={index}>
            <div>
            <input 
          className="input-field"
          type="text" 
          placeholder="Name" 
          value={employee.name} 
          onChange={handleEmployeeChange(index, 'name')} 
        />

            </div>
            <div>
            <input 
          className="input-field"
          type="number" 
          placeholder="Hours" 
          value={employee.hours} 
          onChange={handleEmployeeChange(index, 'hours')} 
        />
            </div>
            
            <Typography variant="body1">{employee.name} to receive: ${roundedAmount.toFixed(2)}</Typography>
          <Typography variant="body1">Leftover change: ${leftoverChange.toFixed(2)}</Typography>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;