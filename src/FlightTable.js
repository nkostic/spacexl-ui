/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import FlightRow from './FlightRow';

class FlightTable extends PureComponent {
  state = {
    flights: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/api/get/flights');
      const flights = await res.json();
      this.setState({
        flights: flights.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.flights.map(flight => <FlightRow key={flight.id} flight={flight} />)}
      </div>
    );
  }
}

export default FlightTable;