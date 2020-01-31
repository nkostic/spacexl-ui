import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Placeholder from "../assets/placeholder-small.png";
import LinkIco from "../assets/link.png";
import Excerpt from "../lib/Excerpt.js";

const FlightTableRow = ({ flight }) => (
  <div className="columns">
    <div className="column">
      <div className="columns table-row is-centered">
        <div className="column is-1 has-text-centered first">
          <figure className="image mobile">
            <img
              src={flight.mission_patch_small || Placeholder}
              alt="Mission Patch"
            />
          </figure>
        </div>
        <div className="column">
          <p className="mobile-header">Rocket Name:</p>
          {flight.rocket_name}
        </div>
        <div className="column">
          <p className="mobile-header">Rocket Type:</p>
          {flight.rocket_type}
        </div>
        <div className="column">
          <p className="mobile-header">Launch Date:</p>
          {format(new Date(flight.launch_date), "MM/dd/yyyy")}
        </div>
        <div className="column is-4">
          <p className="mobile-details">{flight.details}</p>
          <p className="is-hidden-mobile">{Excerpt(flight.details, 111)}</p>
        </div>
        <div className="column is-1">
          <p className="mobile-header">ID:</p>
          {flight.flight_number}
        </div>
        <div className="column last is-1">
          <p className="mobile-header">Article:</p>
          <a
            href={flight.article_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkIco} alt="Link Graphic" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

FlightTableRow.propTypes = {
  flight: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    rocket_type: PropTypes.string.isRequired,
    launch_date: PropTypes.string.isRequired,
    mission_patch_small: PropTypes.string,
    details: PropTypes.string,
    flight_number: PropTypes.number.isRequired,
    article_link: PropTypes.string.isRequired,
    land_success: PropTypes.bool.isRequired,
    reused: PropTypes.bool.isRequired
  }).isRequired
};

export default FlightTableRow;
