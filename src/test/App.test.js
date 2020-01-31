import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('App renders without crashing', () => {
  const { getByText, container } = render(<App />);
  const titleElement = getByText(/SpaceX Launches/i);
  expect(titleElement).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
