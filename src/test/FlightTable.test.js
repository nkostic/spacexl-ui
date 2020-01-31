import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FlightTable from '../components/FlightTable';

afterEach(cleanup)

test('<FlightTable/>', () => {
  const { getByText, container } = render(<FlightTable />);
  const labeLand = getByText(/LAND/i);
  const labeReused = getByText(/REUSED/i);
  const labelWith = getByText(/WITH/i);
  const headerBadge = getByText(/Badge/i);
  const headerRocketName = getByText(/Rocket Name/i);
  const headerRocketType = getByText(/Rocket Type/i);
  const headerLaunchDate = getByText(/Launch Date/i);
  const headerDetails= getByText(/Details/i);
  const headerID= getByText(/ID/i);
  const headerArticle= getByText(/Article/i);
  expect(labeLand).toBeInTheDocument();
  expect(labeReused).toBeInTheDocument();
  expect(labelWith).toBeInTheDocument();
  expect(headerBadge).toBeInTheDocument();
  expect(headerRocketName).toBeInTheDocument(); 
  expect(headerRocketType).toBeInTheDocument(); 
  expect(headerLaunchDate).toBeInTheDocument(); 
  expect(headerDetails).toBeInTheDocument(); 
  expect(headerID).toBeInTheDocument(); 
  expect(headerArticle).toBeInTheDocument(); 
  expect(container.firstChild).toMatchSnapshot();
});
