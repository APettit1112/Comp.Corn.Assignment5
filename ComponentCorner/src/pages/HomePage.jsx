import { useState } from 'react';
import ProductCard from '../assets/components/ProductCard';
import Header from '../assets/components/Header';
import Hero from '../assets/components/Hero';
import Footer from '../assets/components/Footer';
import CartItem from '../assets/components/CartItem';

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

function HomePage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
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

export default HomePage;
