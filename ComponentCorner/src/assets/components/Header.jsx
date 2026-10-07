
import './Header.css';

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="header">
      <div className="header-row">
        <h1>ComponentCorner</h1>

        <div className="cart-container" aria-label="Shopping cart">
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          <span className="cart-badge">{cartCount}</span>
        </div>
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;