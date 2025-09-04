import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

export default function CheckoutPage() {
  const { cartItems, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const order = {
      items: cartItems,
      total: getTotalPrice(),
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch('http://localhost:8000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });

      if (!response.ok) throw new Error('Failed to submit order');

      clearCart();              
      setOrderSubmitted(true);  
    } catch (err) {
      console.error('Error submitting order:', err);
    }
  };


  if (orderSubmitted) {
    return (
      <div className="checkout-page">
        <h1 className="checkout-success">Order Completed</h1>
        <p>Your cart is now empty.</p>
        <p>Thank you for your order!</p>
        <button className="return-home-button" onClick={() => navigate('/')}>
          Return to Home
        </button>
      </div>
    );
  }


  return (
    <div className="checkout-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-container">
          {cartItems.map(item => (
            <div key={item.id} className="checkout-card">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>£{item.price} × {item.quantity}</p>
                <p>Subtotal: £{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="checkout-summary">
            <h3>Total: £{getTotalPrice().toFixed(2)}</h3>
            <button className="confirm-checkout" onClick={handleCheckout}>
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

