import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import CartPreview from '../pages/CartPreview';



const apiUrl = 'https://seed-theory-api.netlify.app/data.json';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const {
    addToCart,
    decreaseQuantity,
    getItemQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="products-page">
      <h1 className="products-heading">Our Plants</h1>

      <div className="products-container">
        {products.map(item => {
          const quantity = getItemQuantity(item.id);

          return (
            <div key={item.id} className="product-card">
              <img src={item.imageUrl} alt={item.name} />
              <h2>{item.name}</h2>
              <p>£{item.price}</p>

              {quantity === 0 ? (
                <button onClick={() => addToCart(item)}>Add</button>
              ) : (
                <div className="add-remove-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>Remove</button>
                  <span className="quantity">{quantity}</span>
                  <button onClick ={() => addToCart(item)}>Add</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="checkout-link-container">
        <Link to="/checkout">
          <button className="go-to-checkout-button">Go to Checkout</button>
        </Link>
      </div>

      <CartPreview />
    </div>
  );
}

