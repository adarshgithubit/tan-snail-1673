import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div class="mobile_navbar">
      <div class="nav_container">
        <div class="ham_menu">
          <div></div>
          <div></div>
        </div>
        <a href="./index.html"
          ><img
            src="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA"
            alt="Rodan + Fields"
        /></a>
        <div class="links">
          <div class="search"><i class="bx bx-search"></i></div>
          <div class="cart"><i class="bx bx-shopping-bag"></i></div>
        </div>
      </div>
    </div>

    <div class="mobile_menu">
      <div class="menu_container">
        <div class="nav_top">
          <div class="sign_in">Sign in <i class="bx bx-user"></i></div>
          <div>X</div>
        </div>
        <div>Shop By Category</div>
        <div>Shop By Concern</div>
        <div>Shop By Product Line</div>
        <div>Best Sellers</div>
        <div>Featured</div>
        <div>Our Story</div>
        <div>Perks Program</div>
        <div>Become A Consultant</div>
        <div>Blog</div>
        <div>Find A Consultant</div>
        <div class="country">
          <img
            src="https://www.rodanandfields.com/en-us/_ui/dest/images/flagUSA.png"
            alt="Flag"
          />
          <span>English</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
