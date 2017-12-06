import React from 'react';
import Lane from './Lane';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const {array} = PropTypes;

const propTypes = {
	lanes: array
}

const defaultProps = {
	title: [
		{
			id: uuid.v4(),
			name: 'Todo',
			editing: false,
			notes: []
		}, {
			id: uuid.v4(),
			name: 'In Progress',
			editing: false,
			notes: []
		}, {
			id: uuid.v4(),
			name: 'Review',
			editing: false,
			notes: []
		}
	]
};

class Lanes extends React.Component {
	render() {
		const lanes = this.props.title.map(title => (
			<Lane key={title.id} title={title.name}/>));
			return (
		      <div className="lanes">
		        {lanes}
		      </div>
		    );
	}
}

// const Lanes =({title}) => {
// 	console.log(title[0].name);
// 	return(
// 	<Lane />
// 	)
// }

Lanes.propTypes = propTypes;
Lanes.defaultProps = defaultProps;

export default Lanes;
