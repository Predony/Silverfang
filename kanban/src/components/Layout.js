import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const {oneOfType, arrayOf, node} = PropTypes;

const propTypes = {
    children: oneOfType([node, arrayOf(node)]),
};

export default function Layout({children}) {
    return (
        <div className="Background">
            <div className="Header">
                <div className="Title">Kanban</div>
            </div>
            <div className="Main">
                <div className="Container">{children}</div>
            </div>
        </div>
    );
}

Layout.propTypes = propTypes;
