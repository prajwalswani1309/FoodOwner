
import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import { login } from '../reduxwork/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [customerEmail, setcustomerEmail] = useState("")
  const [customerPassword, setcustomerPassword] = useState("")

  const addData = () => {
    const customerData = {
      CustomerEmail: customerEmail,
      CustomerPassword: customerPassword
    }

    console.log(customerData)
    axios.post("http://localhost:5000/api/dologin", customerData)
      .then((res) => {
        if (res.data.data) {
          dispatch(login(res.data.data));
          navigate("/");
          alert("Login successful");
        } else {
          alert("invalid email or password");
        }

      })
      .catch((err) => {
        console.error(err)
        alert("An error Occured.plese try again later.");

      });
  };

  return (
    <div className='main_container'>
      <div className='Form_container'>
        <Form className='form'>
          <Form.Control className='input' onChange={(e) => setcustomerEmail(e.target.value)} type='Email' placeholder='Enter Your Email' />
          <Form.Control className='input' onChange={(e) => setcustomerPassword(e.target.value)} type='Password' placeholder='Enter Your Password' />
          <Button onClick={() => { addData() }}>Login</Button>
        </Form>
      </div>
    </div >
  )
}

export default Login