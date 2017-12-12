import React from 'react';
import Lane from './Lane';
import PropTypes from 'prop-types';
// import uuid from 'uuid';

const {array} = PropTypes;

const propTypes = {
    lanes: array,
};

class Lanes extends React.Component {
    render() {
        const lanes = this.props.lanes.map(lane => (
            <Lane key={lane.id} lane={lane} />
        ));
        return <div className="lanes">{lanes}</div>;
    }
}

Lanes.propTypes = propTypes;

export default Lanes;
