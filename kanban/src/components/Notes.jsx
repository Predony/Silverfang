import React from 'react';
import Note from './Note';
import Editable from './Editable';
import PropTypes from 'prop-types';

const {array} = PropTypes;

const propTypes = {
    notes: array.isRequired,
};

class Notes extends React.Component {
    render() {
        const {notes, move, onValueClick, onEdit, onDelete} = this.props;

        return (
            <ul className="notes">
                {notes.map(note => (
                    <Note
                        className="note"
                        id={note.id}
                        key={note.id}
                        editing={note.editing}
                        onMove={move}>
                        <Editable
                            editing={note.editing}
                            value={note.task}
                            onValueClick={onValueClick.bind(null, note.id)}
                            onEdit={onEdit.bind(null, note.id)}
                            onDelete={onDelete.bind(null, note.id)}
                        />
                    </Note>
                ))}
            </ul>
        );
    }
}

Notes.propTypes = propTypes;

export default Notes;
