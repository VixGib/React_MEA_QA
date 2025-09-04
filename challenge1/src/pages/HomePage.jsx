import '../styles/HomePage.css';
import { Link } from 'react-router-dom';


export default function HomePage(){
    return (
        <main className="home">
            <div className="home-content">
                <div className="home-text">
                    <h1>Bring your</h1>
                    <h1>home to life.</h1>
                    <p>Elevate your living space with a touch of nature.</p>
                    <p>We offer a range of easy-care houseplants.</p>
                    <Link to="/products" className="browse-button">
                        Browse Plants
                    </Link>

            </div>
            <div className="home-image">
                <img src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg"
                alt="House Plants"/>
        </div>
        </div>
        </main>
    );
}