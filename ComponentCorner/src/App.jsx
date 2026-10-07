// Commented out previous code in Apps.jsx 
/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/ 

import { useState } from 'react';

import './App.css';
import ProductCard from './assets/components/ProductCard';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import Footer from './assets/components/Footer';
import CartItem from './assets/components/CartItem';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://placehold.co/600x400',
      description: 'Premium noise-cancelling headphones with 30-hour battery life',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://placehold.co/600x400',
      description: 'Fitness tracker with heart rate monitor and GPS',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://placehold.co/600x400',
      description: 'Portable waterproof speaker with 360-degree sound',
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.99,
      image: 'https://placehold.co/600x400',
      description: 'Ergonomic aluminum stand for laptops and tablets',
    },
    {
      id: 5,
      name: 'Webcam',
      price: 129.99,
      image: 'https://placehold.co/600x400',
      description: '4K webcam with auto-focus and noise reduction',
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      price: 159.99,
      image: 'https://placehold.co/600x400',
      description: 'RGB backlit keyboard with custom switches',
    },
  ];

  const addToCart = (product) => {
    console.log('Added to cart:', product);
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <Hero
        title="ComponentCorner"
        subtitle="Discover your next tech upgrade."
        ctaText="Shop Deals"
        image="https://placehold.co/1200x400/0f766e/ffffff?text=Smart+Tech+Deals"
      />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <section className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;