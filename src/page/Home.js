import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Row, } from 'react-bootstrap'
import axios from 'axios'
import { addItem } from '../reduxwork/CartSlice'
import { useDispatch } from 'react-redux'
const Home = () => {
  //All Home
  const [AllFood, setAllFood] = useState([])


  //Add to Card
  const dispatcher = useDispatch();
  


  //AllFood

  useEffect(() => {
    axios.get("http://localhost:5000/api/allfood")
      .then((result) => {
        console.log("Data", result.data)
        setAllFood(result.data)
      }).catch((err) => {
        console.log(err)
      }, [])
  })
  return (
    <>
      <Container className="allfood">
        <div className='PW'><h1>ગુજરાથી નાશ્તા કોર્નર</h1></div>
        <Row>
          {
            AllFood.map((Food) => {
              return (

                <Col className='col-container' sm={12} md={6} lg={4}>

                  <Card>

                    <Card.Img className='card-Image' src={`http://localhost:5000${Food.FoodImage}`} />

                    <Card.Body className='Change'  >
                      <p><h3>{Food.FoodName}</h3></p>
                      <p><h4>{Food.FoodType}</h4></p>
                      <p><h4>{Food.FoodCategory}</h4></p>
                      <p><h4>₹{Food.FoodPrice}</h4></p>
                    </Card.Body>
                    <Card.Footer className='Footer'>
                      <Button onClick={()=>{
                        dispatcher(addItem(Food))
                      }}>
                          Add To Cart
                      </Button>
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

export default Home