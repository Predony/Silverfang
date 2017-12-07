import React from 'react';
import Lane from './Lane';
import PropTypes from 'prop-types';
// import uuid from 'uuid';

const {object} = PropTypes;

const propTypes = {
    title: object,
};

class Lanes extends React.Component {
    render() {
        const lanes = this.props.title.title.map(title => (
            <Lane key={title.id} title={title.name} />
        ));
        return <div className="lanes">{lanes}</div>;
    }
}

Lanes.propTypes = propTypes;

export default Lanes;
