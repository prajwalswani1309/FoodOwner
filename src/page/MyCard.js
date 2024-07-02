import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, decrementQuantity, incrementQuantity } from "../reduxwork/CartSlice";
import axios from "axios";


const Cart = () => {
  const { CartItems, CartTotalAmount } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user)


  const dispatcher = useDispatch();

  dispatcher(calculateTotal());

  //create place order function

  const placeOrder = async () => {

    let finalFoodItems = []
    CartItems.map((Food) => {
      finalFoodItems.push({ Qty: Food.quantity, FoodId: Food._id })
    })
    const orderData = {
      CustId: UserData._id,
      OrderTotalAmount: CartTotalAmount,
      FoodItems: finalFoodItems,
    }
    try {
      const result = await axios.post(
        "http://localhost:5000/api/addorder",
        orderData
      )
      console.log(result)
      alert("Order Added")
    } catch (error) { }
  }
  return (
    <div className="page6">
      <Row>
        {CartItems.map((Food) => {
          const Foodid = Food._id;
          return (
            <Col sm={12} md={6} lg={4}>
              <Card className="cards">
                <Card.Img
                  className="imgs"
                  src={`http://localhost:5000${Food.FoodImage}`}
                />
                <Card.Body className="card-body">
                  <Card.Text className="card-text">{Food.FoodName}</Card.Text>
                  <div>
                    <Card.Subtitle className="card-subtitle">
                    </Card.Subtitle>
                  </div>
                </Card.Body>
                <Card.Footer className="card-footer">
                  {Foodid}
                  <Button
                    className="card-btn"
                    onClick={() => {
                      dispatcher(decrementQuantity({ Foodid }));
                    }}
                  >
                    -
                  </Button>
                  {console.log(Food)}
                  <span>{Food.quantity}</span>
                  <Button
                    onClick={() => {
                      dispatcher(incrementQuantity({ Foodid }));
                    }}
                  >
                    +
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <h4>Total Price:{CartTotalAmount}</h4>
        </Col>
        <Col>
          <Button onClick={() => placeOrder()}>Place Order</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Cart;