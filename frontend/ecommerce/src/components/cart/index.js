import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../cartContext/index';
import CartSidebar from '../cartSidebar/index';
import './index.css'

function Cart() {
  const { cart } = useCart();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
      <span className='cart-length'>{cart.length}</span>
      {isSidebarVisible && <CartSidebar onClose={toggleSidebar} />}
    </div>
  );
}

export default Cart;
