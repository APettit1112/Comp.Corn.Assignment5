import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const CART_STORAGE_KEY = 'componentcorner-cart';

const createStorageMock = () => {
  const values = new Map();

  return {
    getItem: vi.fn((key) => values.get(key) ?? null),
    setItem: vi.fn((key, value) => values.set(key, value)),
    removeItem: vi.fn((key) => values.delete(key)),
    clear: vi.fn(() => values.clear()),
  };
};

describe('App cart state and localStorage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the storefront', () => {
    vi.stubGlobal('localStorage', createStorageMock());

    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: 'ComponentCorner' })).toBeInTheDocument();
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  it('loads cart data from localStorage on startup', () => {
    const storedCart = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://placehold.co/600x400',
        description: 'Premium noise-cancelling headphones with 30-hour battery life',
      },
    ];
    const storage = createStorageMock();
    storage.getItem.mockReturnValue(JSON.stringify(storedCart));
    vi.stubGlobal('localStorage', storage);

    render(<App />);

    expect(storage.getItem).toHaveBeenCalledWith(CART_STORAGE_KEY);
    expect(screen.getByText('1', { selector: '.cart-badge' })).toBeInTheDocument();
    expect(screen.getAllByText('Wireless Headphones')).toHaveLength(2);
    expect(screen.getByText('Total: $99.99')).toBeInTheDocument();
  });

  it('saves cart changes to localStorage', async () => {
    const storage = createStorageMock();
    vi.stubGlobal('localStorage', storage);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: 'Add to Cart' })[0]);

    await waitFor(() => {
      expect(storage.setItem).toHaveBeenCalledWith(
        CART_STORAGE_KEY,
        expect.stringContaining('Wireless Headphones'),
      );
    });

    const latestStoredCart = JSON.parse(storage.setItem.mock.calls.at(-1)[1]);
    expect(latestStoredCart).toEqual([
      expect.objectContaining({ id: 1, name: 'Wireless Headphones', price: 99.99 }),
    ]);
  });
});
