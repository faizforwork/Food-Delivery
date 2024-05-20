import React, { useContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const navigate = useNavigate()
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city:"",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value
      setData(data => ({...data, [name]:value}))
    }
    const checkoutOrder = async (event) =>{
      event.preventDefault()
      let orderItems = [];
      food_list.map((item) => {
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id]
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount()+2
      }
      let response = await axios.post(url+ "/api/order/place", orderData, {headers: {token}})
      if (response.data.success) {
        const {session_url} = response.data
        window.location.replace(session_url)
      } else {
        alert("Error")
      }
    }

    useEffect(()=>{
      if (!token) {
        navigate('/cart')
      }
      else if (getTotalCartAmount() === 0) {
        navigate('/cart')
      }
    },[token])
  return (
    <form onSubmit={checkoutOrder} className="app place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" value={data.firstName} onChange={onChangeHandler} type="text" placeholder="First Name" />
          <input required name="lastName" value={data.lastName} onChange={onChangeHandler} type="text" placeholder="Last Name" />
        </div>
        <input required name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="email" />
        <input required name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="street" />
        <div className="multi-fields">
          <input required name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipCode" value={data.zipCode} onChange={onChangeHandler} type="text" placeholder="Zip Code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="Country" />
        </div>
        <input required name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit">Continue To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
