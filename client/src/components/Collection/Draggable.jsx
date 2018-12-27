import React from 'react';

import { Draggable as DraggableDND } from 'react-beautiful-dnd';

import { DEEP_ORANGE, GRAY } from 'style/Colors';

// Adapted from beautiful dnd example

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: '16px',
    margin: '0 0 16px 0',

    // change background color if dragging
    background: 'white',
    border: isDragging ? `3px ${DEEP_ORANGE} solid` : `1px ${GRAY} solid`,

    // styles we need to apply on draggables
    ...draggableStyle
});

const Draggable = (props) => {
  const { draggableId, index, children } = props;
  return (
    <DraggableDND
      draggableId={draggableId}
      index={index}>
      {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
            )}>
              {children}
          </div>
      )}
    </DraggableDND>
  )
}



export default Draggable;