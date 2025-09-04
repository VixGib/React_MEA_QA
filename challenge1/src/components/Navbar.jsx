import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <header>
            <div className="top-banner">
                <h1>Seed Theory</h1>
            </div>
            <nav className="nav-links-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
    );
}
