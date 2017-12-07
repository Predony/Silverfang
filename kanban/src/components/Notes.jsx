import React from 'react';
import Note from './Note';
import Editable from './Editable';
import PropTypes from 'prop-types';

const {object} = PropTypes;

const propTypes = {
    notes: object,
};

class Notes extends React.Component {
    render() {
        const {notes} = this.props;
        return;
        <div>
            {notes.map(note => (
                <Note
                    id={note.id}
                    key={note.id}
                    onMoveNote={this.props.onMoveNote}
                />
            ))}
        </div>;

        return <ul className="notes-list">{notes}</ul>;
    }
}

Notes.propTypes = propTypes;

export default Notes;
