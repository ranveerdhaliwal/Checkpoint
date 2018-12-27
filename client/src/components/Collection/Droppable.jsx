import React from 'react';

import { Droppable as DroppableDND } from 'react-beautiful-dnd';

import { CYAN, GRAY } from 'style/Colors';

// Adapted from beautiful dnd example

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? `${CYAN}` : `${GRAY}`,
    padding: '8px',
    width: '250px'
});

const Droppable = (props) => {
  const { droppableId, children } = props;

  return (
    <DroppableDND droppableId={droppableId}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </DroppableDND>
  )
}

export default Droppable;