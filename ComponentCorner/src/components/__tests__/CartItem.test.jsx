import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../../assets/components/CartItem';

const item = {
  id: 1,
  name: 'Wireless Headphones',
  price: 99.99,
};

describe('CartItem', () => {
  it('renders and displays the item information', () => {
    render(<CartItem item={item} onRemove={vi.fn()} />);

    expect(screen.getByRole('heading', { name: item.name })).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('calls onRemove with the item id when the Remove button is clicked', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    render(<CartItem item={item} onRemove={onRemove} />);

    await user.click(screen.getByRole('button', { name: 'Remove' }));

    expect(onRemove).toHaveBeenCalledOnce();
    expect(onRemove).toHaveBeenCalledWith(item.id);
  });
});
