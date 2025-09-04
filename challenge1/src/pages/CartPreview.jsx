import { useContext } from 'react';
import  {CartContext}  from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/CartPreview.css'; 

export default function CartPreview() {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-preview">
        <h3>Your Cart</h3>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (

    
    <div className="cart-preview">
      <h3>Your Cart</h3>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            <strong>{item.name}</strong>
            <p>£{item.price.toFixed(2)} × {item.quantity}</p>
          </div>
          <div className="qty-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>🗑️</button>
          </div>
        </div>
      ))}
      <p className="total">Total: £{getTotalPrice().toFixed(2)}</p>
      <Link to="/checkout">
        <button className="go-checkout">Go to Checkout</button>
      </Link>
    </div>
  );
}
