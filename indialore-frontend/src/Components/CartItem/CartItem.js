import './CartItem.css';

const CartItem = ({ cartItem }) => {
  const { img_url, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={img_url} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x Rs.{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;