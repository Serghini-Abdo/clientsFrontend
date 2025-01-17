import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
