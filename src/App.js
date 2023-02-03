
import React,{ useState } from 'react';
import './index.css';
import Employee from './components/employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployees';
import EditEmployee from './components/EditEmployees';
import Header from './components/Header';
import Employees from './pages/Employees';
function App() {

  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
