import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';

function HomePage() {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartContext);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Home Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            width: '200px',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
                        <p style={{ fontSize: '16px', color: '#555' }}>${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            style={{
                                backgroundColor: '#007BFF',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    onClick={goToCart}
                    style={{
                        backgroundColor: '#28A745',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Go to Cart
                </button>
            </div>
        </div>
    );
}

export default HomePage;