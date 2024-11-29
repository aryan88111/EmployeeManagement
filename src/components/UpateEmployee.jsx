import React,{useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpateEmployee = () => {
    const { id } = useParams();  // Get the employee ID from the URL parameters
 
    const [formData, setFormData] = useState({});

 

    
    const handleChange = (e) => {
        
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
      const res=  await axios.put(`http://localhost:7000/api/employees/${id}`, formData); // Send PUT request to update
        console.log(res)
        setFormData(res.data);
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile No"
                    required
                />
                <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
            
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value=''>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            <select name="course"  value={formData.course} onChange={handleChange} required>
                <option value="">Select Course</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="BSC">BSC</option>
                <button type="submit">Update</button>
            </select>
            <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpateEmployee
