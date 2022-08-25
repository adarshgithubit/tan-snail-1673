import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="cart_area">
        <div class="cart_box">
          <div class="cart_nav">
            <i class="bx bx-shopping-bag"></i>
            <h3>Your Bag</h3>
            <p>X</p>
          </div>
          <div class="cart_mid">
            <h3>Your Bag Is Empty</h3>
            <p>Shop now to add products to your bag</p>
            <button class="cart_btn">START SHOPPING</button>
          </div>
          <div class="cart_items"></div>
          <div class="cart_footer">
            <p>Savings, shipping costs and tax calculated at checkout</p>
            <div class="price_total">
              <h3>SUBTOTAL</h3>
              <h3></h3>
            </div>
            <buttom class="cart_btn">Review Bag & Checkout</buttom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
