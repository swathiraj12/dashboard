import React from 'react'
import { createContext } from 'react'
import Home from './Home';

export let OrderDetails = createContext();

const OrderDetail = () => {
    let orders = [
        {
            productName : 'JavaScript',
            productNumber : '85743',
            paymentStage : 'Due',
            paymentStatus : 'Pending'
        },
        {
            productName : 'MERN Stack Developer',
            productNumber : '85765',
            paymentStage : 'Refunded',
            paymentStatus : 'Declined'
        },
        {
            productName : 'MEAN Stack Developer',
            productNumber : '85498',
            paymentStage : 'Paid',
            paymentStatus : 'Active'
        },
        {
            productName : 'Python Full Stack Developer',
            productNumber : '84634',
            paymentStage : 'Due',
            paymentStatus : 'Pending'
        },
        {
            productName : 'HTML and CSS',
            productNumber : '55656',
            paymentStage : 'Paid',
            paymentStatus : 'Active'
        }
    ];
  return (
    <div>
        <OrderDetails.Provider value={orders}>
            <Home/>
        </OrderDetails.Provider>
    </div>
  )
}

export default OrderDetail