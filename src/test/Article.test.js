import { render } from '@testing-library/react';
import ArticlePart from '../article';

test('renders Article title', () => {
  const { getByText } = render(<ArticlePart />);
  const titleElement = getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});