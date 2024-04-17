import { useState } from 'react';

function Employees() {
  const [numEmployees, setNumEmployees] = useState(0);
  const [employeeNames, setEmployeeNames] = useState([]);

  const handleNumChange = (e) => {
    setNumEmployees(e.target.value);
    setEmployeeNames(Array.from({ length: e.target.value }, () => ({ name: '', hours: '' })));
  };

  const handleEmployeeChange = (index, field) => (e) => {
    const newEmployees = [...employeeNames];
    newEmployees[index][field] = e.target.value;
    setEmployeeNames(newEmployees);
  };

  return (
    <div>
      <label>
        Number of Employees:
        <select value={numEmployees} onChange={handleNumChange}>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      {employeeNames.map((employee, index) => (
        <div key={index}>
          <label>
            Name:
            <input type="text" value={employee.name} onChange={handleEmployeeChange(index, 'name')} />
          </label>
          <label>
            Hours:
            <input type="number" value={employee.hours} onChange={handleEmployeeChange(index, 'hours')} />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Employees;