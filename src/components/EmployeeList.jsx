import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import UpdateEmployee from "./UpateEmployee.jsx";
import { Link,useNavigate, useParams } from 'react-router-dom';


const EmployeeList = () => {
    const uId=useParams();
    const usd=localStorage.getItem("_id")
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:7000/api/employees');
        // const filterProduct=response.data.filter((item)=> item.createdBy===usd);
        setEmployees(response.data);
    };

    const deleteEmployees = async (id) => {
        const response = await axios.delete(`http://localhost:7000/api/employees/${id}`);
        setEmployees(response.data);
        
            navigate("/");
            fetchEmployees();
        
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const name=localStorage.getItem("name");
    const clear =()=>{
        localStorage.clear();
        navigate('/login');

    }

    return (
        <div>
            <h4>Hello Admin</h4>
            <button onClick={clear}>Logout</button>
            <h5><Link to='/addEmployee'>
            <button>Add Employee</button></Link></h5>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                         
                        <tr key={emp._id}>
                            {/* <td>{emp._id}</td> */}
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.mobile}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.course}</td>
                            {/* <td>{emp.createdAt}</td> */}
                            <td><button onClick={()=>deleteEmployees(emp._id)}>delete</button> <Link to={`/updateEmployee/${emp._id}`}><button >update</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;