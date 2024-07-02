import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import '../page/CSS/Registretion.css'

const Registretion = () => {
    const [CustomerName, setCustomerName] = useState("")
    const [CustomerEmail, setCustomerEmail] = useState("")
    const [CustomerMobNo, setCustomerMobNo] = useState("")
    const [CustomerPassword, setCustomerPassword] = useState("")
    const [CustomerAddress, setCustomerAddress] = useState("")
    const [CustomerCity, setCustomerCity] = useState("")
    const [CustomerPinCode, setCustomerPinCode] = useState(0)

    const addData = async () => {
        const CustomerData = {
            CustomerName: CustomerName,
            CustomerEmail: CustomerEmail,
            CustomerMobNo: CustomerMobNo,
            CustomerPassword: CustomerPassword,
            CustomerAddress: CustomerAddress,
            CustomerCity: CustomerCity,
            CustomerPinCode: CustomerPinCode}
            console.log(CustomerData)
        try {
            let res = await axios.post("http://localhost:5000/api/addcustomer",CustomerData )
            alert("Added")
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form className='registretion-form'>
                <h1>FILL YOUR DETAILS</h1>
                <Form.Control onChange={(e) => setCustomerName(e.target.value)} type='text' placeholder='CustomerName' />
                <Form.Control onChange={(e) => setCustomerEmail(e.target.value)} type='text' placeholder='CustomerEmail' />
                <Form.Control onChange={(e) => setCustomerMobNo(e.target.value)} type='text' placeholder='CustomerMobNo' />
                <Form.Control onChange={(e) => setCustomerPassword(e.target.value)} type='text' placeholder='CustomerPassword' />
                <Form.Control onChange={(e) => setCustomerAddress(e.target.value)} type='text' placeholder=' CustomerAddress' />
                <Form.Control onChange={(e) => setCustomerCity(e.target.value)} type='text' placeholder='CustomerCity' />
                <Form.Control onChange={(e) => setCustomerPinCode(e.target.value)} type='text' placeholder='CustomerPinCode' />
                    
                     <button onClick={() => { addData() }}>SUBMIT</button>
            </Form>
           
        </div>

    )
}
export default Registretion
