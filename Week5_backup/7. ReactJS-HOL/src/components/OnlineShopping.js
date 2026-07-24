import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    // Step 2: Create an array of 5 items
    const CartInfo = [
      { itemname: 'Laptop', price: 80000 },
      { itemname: 'TV', price: 120000 },
      { itemname: 'Washing Machine', price: 50000 },
      { itemname: 'Mobile', price: 30000 },
      { itemname: 'Fridge', price: 70000 }
    ];

    // Step 3: Pass the array as prop to Cart
    return (
      <div className="mydiv">
        <h1>Shopping Cart</h1>
        <Cart item={CartInfo} />
      </div>
    );
  }
}

export default OnlineShopping;