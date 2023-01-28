
import React,{ useState } from 'react';
import './App.css';
import Employee from './components/employee';

function App() {
  console.log("We Are About to list the Employees");
  const showEmployees = true;
  //let role = 'dev';
  
  // using useState
  const [role, setRole] = useState('dev');
  // No. 1 of using state never assign a value to the variable directly you always go through set whatever the set is in this case set role
  return (
    <div className="App">
      {showEmployees ?
      <>
      <input type='text' onChange={(e)=> {
        console.log(e.target.value);
        setRole(e.target.value)
      }} />
        <Employee name="Allen" role="intern"/>
        <Employee name="John" role={role}/>
        <Employee name="Clark" />
      
      </>
        : 
      <p>You cannot see the employees</p>
      }

    </div>
  );
}

export default App;
