import React from 'react';
import PropTypes from 'prop-types';

const {string} = PropTypes;

const propTypes = {
    title: string,
};

const Lane = ({title}) => {
    return (
        <div className="lane">
            <h2 className="lane__name">
                {title}
                <button className="lane__delete">-</button>
            </h2>
            {/* <Notes/> */}
            <button className="add-note">+ note</button>
        </div>
    );
};

Lane.propTypes = propTypes;

export default Lane;
