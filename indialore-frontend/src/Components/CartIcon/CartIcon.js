import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping_cart.svg';

import { CartContext } from '../../contexts/CartContext';

import './CartIcon.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;