import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link,useNavigate } from "react-router-dom";

const SignUp = () => {
const [userData, setUserData] = useState({name:"", email:"", password:"",geolocation:""})
let navigate= useNavigate();
    const handleSubmit=async(e)=>{
e.preventDefault();
 const response=await  fetch("http://localhost:5000/api/createUser",{
    method:'POST',
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify({name:userData.name,email:userData.email, password:userData.password,location:userData.geolocation})
 });  
 const json= await response.json()
console.log(json);

if(!json.success){
    alert("Enter valid details! ")
}
 if (json.success) {
 navigate('/login')
 }
}

     const onChange = (e) => {
       setUserData({ ...userData, [e.target.name]: e.target.value });
     };
  return (
    <>
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              value={userData.name}
            onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={userData.email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={userData.password}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="geolocation"
              value={userData.geolocation}
              onChange={onChange}
            />
          </Form.Group>

          <Button className="mb-3" variant="dark" type="submit">
            Submit
          </Button>
          <Link to="/login" className="mb-3 ms-3 btn btn-info">
            Already a user
          </Link>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
