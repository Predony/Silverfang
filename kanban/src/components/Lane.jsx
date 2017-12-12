import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes';
import Editable from './Editable.jsx';

const {string, func, shape} = PropTypes;

const propTypes = {
    lane: shape({
        name: string.isRequired,
    }).isRequired,
    onClickHandler: func,
};

class Lane extends React.Component {
    render() {
        const props = this.props;
        const lane_Notes = {
            laneNotes: props.lane.notes
                .map(
                    id =>
                        this.state.notes[
                            this.state.notes.findIndex(note => note.id === id)
                        ]
                )
                .filter(note => note),
        };
        const {connectDropTarget, lane, className} = props;
        const laneId = lane.id;

        return (
            <div className={className}>
                <div
                    className="lane-header"
                    onClick={() =>
                        props.updateLane({id: laneId, editing: true})
                    }>
                    <div className="lane-add-note">
                        <button onClick={this.addNote.bind(this, laneId)}>
                            +
                        </button>
                    </div>
                    <Editable
                        className="lane-name"
                        editing={lane.editing}
                        value={lane.name}
                        onEdit={name =>
                            props.updateLane({
                                id: laneId,
                                name,
                                editing: false,
                            })
                        }
                    />
                    <div className="lane-delete">
                        <button onClick={this.deleteLane.bind(this, lane)}>
                            x
                        </button>
                    </div>
                </div>
                <Notes
                    notes={lane_Notes.laneNotes}
                    onValueClick={id => props.updateNote({id, editing: true})}
                    onEdit={(id, task) =>
                        props.updateNote({id, task, editing: false})
                    }
                    onDelete={(id, e) => this.deleteNote(laneId, id, e)}
                />
            </div>
        );
    }
    deleteLane(lane, e) {
        e.stopPropagation();

        const laneId = lane.id;

        // Clean up notes
        lane.notes.forEach(noteId => {
            this.props.detachFromLane(laneId, noteId);
            this.props.deleteNote(noteId);
        });

        this.props.deleteLane(laneId);
    }
    addNote(laneId, e) {
        e.stopPropagation();

        const o = this.props.createNote({
            task: '',
        });
        this.props.attachToLane(laneId, o.note.id);
    }
    deleteNote(laneId, noteId, e) {
        e.stopPropagation();

        this.props.detachFromLane(laneId, noteId);
        this.props.deleteNote(noteId);
    }
}

Lane.propTypes = propTypes;

export default Lane;
