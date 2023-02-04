
import React,{ useState } from 'react';
import './index.css';
import Employee from './components/employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployees';
import EditEmployee from './components/EditEmployees';
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './components/Dictionary';
import Customers from './pages/Customers';
function App() {

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/dictionary' element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
    
  );
}

export default App;
