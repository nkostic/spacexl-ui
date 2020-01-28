import React from "react";
import PropTypes from "prop-types";
import { format } from 'date-fns'
import Placeholder from "../assets/placeholder-small.png";
import LinkIco from "../assets/link.png";
import Excerpt from "../lib/Excerpt.js";

const FlightTableRow = ({ flight }) => (
  <div className="columns">
    <div className="column">
      <div className="columns table-row">
        <div className="column first is-1">
          <img
            src={flight.mission_patch_small || Placeholder}
            alt="Mission Patch"
          />
        </div>
        <div className="column">{flight.rocket_name}</div>
        <div className="column">{flight.rocket_type}</div>
        <div className="column">{ format(new Date(flight.launch_date), 'MM/dd/yyyy') }</div>
        <div className="column is-4">{Excerpt(flight.details, 35)}</div>
        <div className="column is-1">{flight.flight_number}</div>
        <div className="column last is-1">
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
