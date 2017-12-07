import React from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes';

const {string, func} = PropTypes;

const propTypes = {
    title: string,
    onClickHandler: func.isRequired,
};

const Lane = ({title, onClickHandler}) => {
    return (
        <div className="lane">
            <h2 className="lane__name">
                {title}
                <button className="lane__delete">-</button>
            </h2>
            {/* <Notes /> */}
            <button className="add-note" onClick={onClickHandler}>
                + note
            </button>
        </div>
    );
};

Lane.propTypes = propTypes;

export default Lane;
