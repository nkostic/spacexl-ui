/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import axios from 'axios';
//mport Checkbox from "./Checkbox";
import FlightTableRow from "./FlightTableRow";

class FlightTable extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      land: false,
      reused: false,
      with: false
    }

    this.fetch = this.fetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetch() {
    try {
      const filters = {
        land: this.state.land,
        reused: this.state.reused,
        with: this.state.with
      }

      axios.post(`${process.env.REACT_APP_API_URL}/api/get/flights`, { filters })
      .then(res => {
        console.log(res);
        console.log(res.data);
        const flights = res.data;
        this.setState({
          flights
        });
      })

    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.fetch();
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    switch (item) {
      case 'land':
        this.setState({'land':isChecked});
        break;
      case 'reused':
        this.setState({'reused':isChecked});
        break;
      case 'with':
        this.setState({'with':isChecked});
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns filters">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <button
                      onClick={this.fetch}
                      className="button refresh"
                    ></button>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <label className="checkbox">
                      LAND
                      <input type="checkbox" 
                        name="land"
                        onChange={this.handleChange}
                        checked={this.state.land}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="level-item">
                    <label className="checkbox">
                      REUSED
                      <input type="checkbox" 
                        name="reused"
                        onChange={this.handleChange}
                        checked={this.state.reused}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="level-item">
                    <label className="checkbox">
                      WITH REDDIT
                      <input type="checkbox" 
                        name="with"
                        onChange={this.handleChange}
                        checked={this.state.with}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns table-header">
            <div className="column">
              <div className="columns">
                <div className="column is-1">Badge</div>
                <div className="column">Rocket Name</div>
                <div className="column">Rocket Type</div>
                <div className="column">Launch Date</div>
                <div className="column is-4">Details</div>
                <div className="column is-1">ID</div>
                <div className="column is-1">Article</div>
              </div>
            </div>
          </div>

          {this.state.flights.map(flight => (
            <FlightTableRow key={flight.id} flight={flight} />
          ))}
        </div>
      </section>
    );
  }
}

export default FlightTable;
