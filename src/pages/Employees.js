
import React,{ useState } from 'react';
import '../index.css';
import Employee from '../components/employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployees';
import EditEmployee from '../components/EditEmployees';
import Header from '../components/Header';
function Employees() {
  //console.log("We Are About to list the Employees");
  const showEmployees = true;
  //let role = 'dev';
  
  // using useState
  const [role, setRole] = useState('dev');
  // No. 1 of using state never assign a value to the variable directly you always go through set whatever the set is in this case set role

  // Adding Map
  const [employees, setEmpoyees] = useState([
      {
        id: 1,
        name: "Allen", 
        role: 'Developer',
        img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 2,
        name: "John", 
        role: 'Director of Eng',
        img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 3,
        name: "Clark", 
        role: 'Senior Intern',
        img: "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 4,
        name: "Salamanca", 
        role: 'Software Engineer',
        img: "https://images.pexels.com/photos/13968959/pexels-photo-13968959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 5,
        name: "Mr. White", 
        role: 'Devrel Engineer',
        img: "https://images.pexels.com/photos/3363304/pexels-photo-3363304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 6,
        name: "Fring", 
        role: 'Manager',
        img: "https://images.pexels.com/photos/3206078/pexels-photo-3206078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  );
  
  // update Employee function
  function uptEmployee(id, newName, newRole){
    console.log('update Employee inside of app.js');
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        //return new
        return {...employee, name: newName, role: newRole};
      }

      return employee;
    });
    // update Employee
    setEmpoyees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmpoyees([...employees, newEmployee])
  }
  return (
    <div className="">
      
      {showEmployees ?
      <>
  
      <div className='flex flex-wrap justify-center '>

        {/* Using Map */}
        {employees.map((employee) => {
          const editEmployee = (
            <EditEmployee
                id={employee.id}
                name={employee.name}
                role={employee.role}
                uptEmployee={uptEmployee}
              />
          )
          return (
          <Employee 
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            editEmployee={editEmployee}
          />
          );})}
      </div>   
        <AddEmployee newEmployee={newEmployee} />    
      </>
        : 
      <p>Access Denied</p>
      }

    </div>
  );
}

export default Employees;
