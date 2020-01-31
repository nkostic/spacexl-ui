/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import axios from 'axios';
import FlightTableRow from "./FlightTableRow";
import Spinner from 'react-spinkit';

class FlightTable extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      land: false,
      reused: false,
      with: false,
      loading : true
    }

    this.fetch = this.fetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetch() {
    try {

      this.setState({
        loading: true
      });

      const filters = {
        land: this.state.land,
        reused: this.state.reused,
        with: this.state.with
      }

      axios.post(`${process.env.REACT_APP_API_URL}/api/get/flights`, { filters })
      .then(res => {
        const flights = res.data.results;
        this.setState({
          flights,
          loading: false
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
                <div className="level-left is-inline-mobile">
                  <div className="level-item is-inline-mobile">
                    <button
                      onClick={this.fetch}
                      className="button refresh"
                    ></button>
                  </div>
                </div>
                <div className="level-right is-inline-mobile">
                  <div className="level-item is-inline-mobile">
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
                  <div className="level-item is-inline-mobile">
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
                  <div className="level-item is-inline-mobile">
                    <label className="checkbox">
                      <span className="is-hidden-mobile">WITH </span>
                      <span>REDDIT</span>
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

          <div className="columns table-header is-hidden-mobile">
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

          {this.state.loading && 
            <div className="columns is-centered">
              <div className="column has-text-centered is-1 loading">
                <Spinner name='ball-scale-multiple' color="white"/>
              </div>
            </div>
          }
          
        </div>
      </section>
    );
  }
}

export default FlightTable;
