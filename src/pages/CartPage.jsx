import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartPage() {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Cart</h1>
            {cartItems.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
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
                                src={item.image}
                                alt={item.name}
                                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name}</h3>
                            <p style={{ fontSize: '16px', color: '#555' }}>${item.price}</p>
                            <button
                                onClick={() => handleRemoveItem(index)}
                                style={{
                                    backgroundColor: '#DC3545',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginBottom: '10px',
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                        onClick={handleCheckout}
                        style={{
                            backgroundColor: '#28A745',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartPage;