function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, index) => (
        <p key={`${item.id}-${index}`}>{item.name} is in your cart</p>
      ))}

      {/* ⭐ Bonus: Cart Total */}
      <h3>Total Items: {cart.length}</h3>
    </div>
  );
}

export default Cart;