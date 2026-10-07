import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../../assets/components/ProductCard';

const product = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
  image: 'https://placehold.co/600x400',
  description: 'Premium noise-cancelling headphones with 30-hour battery life',
};

describe('ProductCard', () => {
  it('renders without errors and displays the product information from props', () => {
    render(<ProductCard {...product} onAddToCart={vi.fn()} />);

    expect(screen.getByRole('img', { name: product.name })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });

  it('contains an Add to Cart button', () => {
    render(<ProductCard {...product} onAddToCart={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
  });

  it('passes the product to onAddToCart when the button is clicked', async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();
    render(<ProductCard {...product} onAddToCart={onAddToCart} />);

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(onAddToCart).toHaveBeenCalledWith(product);
  });
});
