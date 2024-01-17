import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link,useNavigate } from "react-router-dom";


const Login = () => {
  const [userData, setUserData] = useState({
   
    email: "",
    password: "",
   
  });

  let navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
        email: userData.email,
        password: userData.password,
     
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid details! ");
    }
     if (json.success) {
      localStorage.setItem("userEmail", userData.email);
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate('/');
     }
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
     
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

          

          <Button className="mb-3" variant="dark" type="submit">
            Submit
          </Button>
          <Link to="/signup" className="mb-3 ms-3 btn btn-info">
           Register as New user
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Login
