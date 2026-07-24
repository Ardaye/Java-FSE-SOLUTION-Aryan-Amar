import React, { Component } from 'react';

class Cart extends Component {
  render() {
    // Step 1: Access items via props
    const { item } = this.props;

    return (
      <div>
        <h2>Items Ordered :</h2>
        <table border="1" cellPadding="5" style={{ width: '300px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {item.map((itemObj, index) => (
              <tr key={index}>
                <td>{itemObj.itemname}</td>
                <td>{itemObj.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;