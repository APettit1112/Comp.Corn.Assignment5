import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders without errors and displays the main storefront content', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 2, name: 'ComponentCorner' })).toBeInTheDocument();
    expect(screen.getByText('Discover your next tech upgrade.')).toBeInTheDocument();
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  it('adds a product to the cart when its Add to Cart button is clicked', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await user.click(screen.getAllByRole('button', { name: 'Add to Cart' })[0]);

    expect(screen.getAllByText('Wireless Headphones')).toHaveLength(2);
    expect(screen.getByText('Total: $99.99')).toBeInTheDocument();
  });
});
