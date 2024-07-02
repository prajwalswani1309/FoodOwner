import React, { useState, useEffect } from 'react'
import {  Card, Col, Container, Row, } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {
  const [AllOrder, setAllOrder] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/api/allorder")
      .then((result) => {
        console.log("Data", result.data)
        setAllOrder(result.data)
      }).catch((err) => {
        console.log(err)
      }, [])
  })
  return (
    <>
      <Container>
        <Row>
          {
            AllOrder.map((Order) => {
              return (

                <Col sm={12} md={6} lg={4}>

                  <Card>
                    <Card.Body >
                      <Card.Text>{Order.OrderDate}</Card.Text>
                      <Card.Text>{Order.OrderTotalAmount}</Card.Text>
                      <Card.Text>{Order?.CustId?.CustomerName}</Card.Text>
                      <Card.Text>{Order.CustId?.CustomerMobNo}</Card.Text>
                      <Card.Text>{Order.CustId?.CustomerPassword}</Card.Text>
                      {/* <Card.Text>{Order.FoodItems?.FoodId.FoodName}</Card.Text> */}

                    </Card.Body>
                    <Card.Footer >
                      <button onClick={()=>navigator("/orderinfo",{state:Order})}>Orderinfo</button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default MyOrders

