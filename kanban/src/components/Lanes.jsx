import React from 'react';
import Lane from './Lane';
import PropTypes from 'prop-types';
// import uuid from 'uuid';

const {object} = PropTypes;

const propTypes = {
    title: object,
};

class Lanes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
        };
    }
    addNote(c) {
        console.log(`Füge eine Karte hinzu bei: ${c.name}`);
    }
    render() {
        const lanes = this.state.title.title.map(title => (
            <Lane
                key={title.id}
                title={title.name}
                onClickHandler={() => this.addNote(title)}
                {...title}
            />
        ));
        return <div className="lanes">{lanes}</div>;
    }
}

Lanes.propTypes = propTypes;

export default Lanes;
