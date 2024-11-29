import axios from 'axios';
import React, { useState } from 'react'


const EmployeeForm = () => {

    const [employee,setEmployee]=useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/api/employees', employee);
            alert('Employee created successfully');
        } catch (error) {
            alert('Error creating employee');
        }
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
            <input type="text" name="designation" placeholder="Designation" onChange={handleChange} required />
            <select name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            <select name="course" onChange={handleChange} required>
                <option value="">Select Course</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="BSC">BSC</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
 
}

export default EmployeeForm
