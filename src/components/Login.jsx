
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


import { Link,useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  height: 100vh;
    width: 100vw;
    // background-color:teal;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.div`
 height: 70%;
    width: 60%;
    background-color: white; 
    border-radius: 8px;
    border: 1px solid gray;
    display: flex;
`;
const LBox=styled.div`
    border-radius: 8px;
    height: 100%;
    width: 50%;
    background-image: url(https://media.istockphoto.com/id/910104070/vector/multiethnic-business-team.jpg?s=1024x1024&w=is&k=20&c=SWbVTdH60bTldT6X8vIbzbHBEXGv_YBOkyV5YXdZnYs=);
    background-size: cover;
    background-position: center;`;

    const RBox=styled.div`
    height: 100%;
    width: 50%;
    `;

const Heading=styled.div`
font-size: 100px;
   margin:40px 50px;
   font-family: "kajiro";
   `;

const User = styled.div`
 height: 10%;
    width: auto;
    margin: 40px 0;
`;

const Input = styled.input`
    margin-left: 40px ;
    height: 30px;
    width: 70%;
    font-size: 12px;
    border-radius: 4px;
    background: none;
    // font-family: "kajiro";

  &:focus {
    border-color: #888;
    outline: none;
  }
`;
const Btn=styled.div`
 height: 20%;
    width: 100%;
    `;

const Button = styled.button`
  margin-left: 40px;
    height: 40px;
    width: 80px;
    font-size: 30px;
    border-radius: 4px;
    background: white;
    font-family: "kajiro";

  &:hover {
     cursor: pointer;
    background: gray;
  }
`;
const LinkB=styled.div`
margin-top:-20px;
`;

const Login = () => {
    const [data, setData] = useState({
        email:"",
        password:''
    });
    
  
  const navigate=useNavigate();
  
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})

  };
  const handleSubmit=async(e)=>{
    
   
      const res=await axios.post("http://localhost:7000/user/login",data);
      console.log("resssssss");
      
        alert("Successfully Logined")
        if(res.data){
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("name",res.data.name);
        //   localStorage.setItem("name",res.data._id);
            navigate('/')
        }
        
        console.log(res);
   }
  return (
    <LoginContainer>
      <Main>
    <LBox></LBox>
    <RBox>
        <Heading>Login</Heading>
        <User>
        <Input type="text" value={data.value} placeholder="Email" name="email" onChange={handleChange}/>
    </User>
      <User> 
           <Input type="password" value={data.value} name="password" id="" onChange={handleChange}  placeholder="password"/>
      </User>
      <Btn><Button type="submit"  onClick={handleSubmit}>Login</Button></Btn>
      <LinkB id="subheading"> Register Here
        <Link to="/register">Click Here</Link>
       
      </LinkB>
</RBox>
</Main>
    </LoginContainer>
  );
};

export default Login;
