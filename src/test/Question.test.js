import { render } from '@testing-library/react';
import QuestionPart from '../question';

test('renders Question title', () => {
  const { getByText } = render(<QuestionPart />);
  const titleElement = getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});