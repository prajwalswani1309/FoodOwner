import React from 'react'
import { useLocation } from 'react-router-dom'

const Orderinfo = () => {
    const OrderData = useLocation().state
    return (
        <div>
            <h1>Orderinfo</h1>
            <h4>Date:{OrderData.OrderDate}</h4>
            <h4>Total:{OrderData.OrderTotalAmount}</h4>
            <div>
                {
                    OrderData.FoodItems.map((Food) => {
                        return (
                            <div>
                                <img src={`http://localhost:5000${Food.FoodId.FoodImage}`} />
                                <p>Qty:{Food.Qty}</p>
                                <p>Qty:{Food.FoodId.FoodName}</p>
                                <p>Qty:{Food.FoodId.FoodImage}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Orderinfo
