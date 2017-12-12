import React, {PureComponent} from 'react';
// import {string, number, func, shape} from 'prop-types';
import {DragSource, DropTarget} from 'react-dnd';
import './App.css';

const noteSource = {
    beginDrag(props) {
        return {
            id: props.id,
        };
    },
    isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
    },
};

const noteTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.id;
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;

        if (sourceId !== targetId) {
            targetProps.onMove({sourceId, targetId});
        }
    },
};

class Note extends PureComponent {
    render() {
        const {
            connectDragSource,
            connectDropTarget,
            isDragging,
            onMove,
            id,
            editing,
            ...props
        } = this.props;
        // Pass through if we are editing
        const dragSource = editing ? a => a : connectDragSource;

        return dragSource(
            connectDropTarget(
                <li
                    style={{
                        opacity: isDragging ? 0 : 1,
                    }}
                    {...props}>
                    {props.children}
                </li>
            )
        );
    }
}

// Note.propTypes = propTypes;

export default Note;
