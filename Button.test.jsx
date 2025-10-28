// client/src/components/__tests__/Button.test.jsx
import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders button with label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});

