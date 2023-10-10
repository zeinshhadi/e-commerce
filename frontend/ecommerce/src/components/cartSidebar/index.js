import React from 'react';
import { useCart } from '../cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function CartSidebar({ onClose }) {
  const { cart, dispatch } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleOrder = () => {
    // Logic to initiate the order
  };

  const handleChangeQuantity = (event, item) => {
    // Prevent default action and stop event from bubbling up
    event.preventDefault();
    event.stopPropagation();

    const newQuantity = Number(event.target.value);
    if (!Number.isInteger(newQuantity) || newQuantity <= 0) {
      // Handle invalid quantity
      return;
    }
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: { ...item, quantity: newQuantity }
    });
  };

  return (
    <div className="cart-sidebar">
      <FontAwesomeIcon 
        icon={faTimes} 
        onClick={(e) => { e.stopPropagation(); onClose(); }} 
        className="close-icon" 
      />
      {cart.map(item => (
        <div key={item._id} className="cart-box">
          <div className='item-image col-3'>
          <img src={item.images[0]} alt={item.title} className="cart-image" />
          </div>
          <div className="item-details col-4">
            <div className="detail-box">
              <div className="cart-product-title">{item.description}</div>
              <div className="cart-price">${item.price}</div>
              {/* Prevent event bubbling on quantity change */}
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleChangeQuantity(e, item)} 
                onClick={(e) => e.stopPropagation()}
                min="1"
                max={item.quantityStock}
              />
            </div>
            <FontAwesomeIcon 
              icon={faTrash} 
              onClick={() => handleRemove(item)} 
              className="trash-icon" 
            />
          </div>
        </div>
      ))}
      <p className='border'>Total: ${getTotalPrice()}</p>
      <button onClick={handleOrder}>Check Out</button>
    </div>
  );
}

export default CartSidebar;
