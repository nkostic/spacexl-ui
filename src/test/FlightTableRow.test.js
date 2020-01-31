import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FlightTableRow from '../components/FlightTableRow';

afterEach(cleanup)

test('<FlightTableRow/>', () => {
  const flight = {
    id:1000,
    mission_patch_small:'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    rocket_name:'Falcon 1',
    rocket_type:'Merlin A',
    launch_date:'2006-03-24T22:30:00.000Z',
    details:null,
    flight_number: 1001,
    article_link: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html'
  }
  const { getByText, container } = render(<FlightTableRow key={flight.id} flight={flight}/>);
  const rocketName = getByText(/Falcon 1/);
  const rocketType = getByText(/Merlin A/);
  const launchDate = getByText(/03\/24\/2006/);
  const details = getByText(/No Details/);
  const flightNumber = getByText(/1001/);
  expect(rocketName).toBeInTheDocument();
  expect(rocketType).toBeInTheDocument();
  expect(launchDate).toBeInTheDocument();
  expect(details).toBeInTheDocument();
  expect(flightNumber).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
  
})
