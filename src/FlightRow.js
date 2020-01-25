import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ flight }) => (
    <div></div>
);

TableRow.propTypes = {
    flight: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default TableRow;