import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpateEmployee';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css';
import { Routes,Route } from 'react-router-dom'

const App = () => {
  
    return (
        <div className="App">
            <h1>Employee Management System</h1>
            {/* <EmployeeForm /> */}
            {/* <EmployeeList /> */}
            <Routes>
              <Route>
              <Route path= {`/updateEmployee/:id`} element={<UpdateEmployee/>}/>
              <Route path= '/' element={<EmployeeList />}/>
              <Route path= '/addEmployee' element={<EmployeeForm />}/>
              <Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
              </Route>
            </Routes>
        </div>
    );
};

export default App;