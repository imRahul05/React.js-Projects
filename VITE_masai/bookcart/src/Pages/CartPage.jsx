import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Actions';
import NavBar from '../components/NavBar';

const CartPage = () => {
  const { cart, total } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  return (
    <div>
      <NavBar />
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cart.map(item => (
              <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h3>{item.title}</h3>
                  <p>Author: {item.author}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
            <h2>Total: ₹{total}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;