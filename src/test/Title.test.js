import React from 'react';
import { render } from '@testing-library/react';
import Title from '../components/Title';

test('<Title></Title>', () => {
  const {getByText, container} = render(<Title>SpaceX Launches</Title>);
  const titleElement = getByText(/SpaceX Launches/i);
  expect(titleElement).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
})
