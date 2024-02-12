import { render } from '@testing-library/react';
import App from '../App';

test('renders New Post title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/New Post/i);
  expect(titleElement).toBeInTheDocument();
});