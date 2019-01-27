import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { DragDropContext } from 'react-beautiful-dnd';

import styled from 'styled-components';

import Draggable from './Draggable';
import Droppable from './Droppable';

import CollectionGameCard from './CollectionGameCard';

import { move, reorder } from './utils';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Collection extends React.Component {

  id2List = {
      backlog: 'backlog',
      inprogress: 'inprogress',
      completed: 'completed'
  };

  getList = id => this.props[this.id2List[id]];

  getDispatchActions = () => {
    return {
      add: {
        backlog: this.props.collectionBacklogAdd,
        inprogress: this.props.collectionInProgressAdd,
        completed: this.props.collectionCompletedAdd,
      },
      remove: {
        backlog: this.props.collectionBacklogRemove,
        inprogress: this.props.collectionInProgressRemove,
        completed: this.props.collectionCompletedRemove,
      },
      set: {
        backlog: this.props.collectionBacklogSet,
        inprogress: this.props.collectionInProgressSet,
        completed: this.props.collectionCompletedSet,
        
      }
    }

  }

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const dispatchObj = this.getDispatchActions();

    // if dropped into the same list, then we are just reordering
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      const setDispatchFunction = dispatchObj.set[source.droppableId];
      setDispatchFunction(items);

    } else {
      // otherwise we dropped from one list to another

      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination,
        dispatchObj
      );

      // set the lists so we can retain their order
      const setSourceDispatchFunction = dispatchObj.set[source.droppableId];
      setSourceDispatchFunction(result[source.droppableId]);

      const setDestinationDispatchFunction = dispatchObj.set[destination.droppableId];
      setDestinationDispatchFunction(result[destination.droppableId]);

    }
  };

  render() {
    const dispatchObj = this.getDispatchActions();

    return (
      <FlexWrapper>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {Object.keys(this.id2List).map((id, index) => (
            <SectionWrapper key={index}>
              <Typography variant="h6">{id.toUpperCase()}</Typography>
              <Droppable  droppableId={id}>
                {this.getList(id).map((game, index) => (
                  <Draggable
                    key={game.id}
                    draggableId={game.id}
                    index={index}
                  >
                    <CollectionGameCard 
                      game={game} 
                      removeDispatch={dispatchObj.remove[id]} 
                      getGameDetails={this.props.getGameDetails} 
                    >
                    </CollectionGameCard>
                  </Draggable>
                ))}
              </Droppable>
            </SectionWrapper>
          ))}
        </DragDropContext>
      </FlexWrapper>
    );
  }
}

Collection.propTypes = {
  inprogress: PropTypes.array.isRequired,
  completed: PropTypes.array.isRequired,
  backlog: PropTypes.array.isRequired,
  collectionInProgressAdd: PropTypes.func.isRequired,
  collectionCompletedAdd: PropTypes.func.isRequired,
  collectionBacklogAdd: PropTypes.func.isRequired,
  collectionInProgressRemove: PropTypes.func.isRequired,
  collectionCompletedRemove: PropTypes.func.isRequired,
  collectionBacklogRemove: PropTypes.func.isRequired,
  collectionInProgressSet: PropTypes.func.isRequired,
  collectionCompletedSet: PropTypes.func.isRequired,
  collectionBacklogSet: PropTypes.func.isRequired,
};

export default Collection;
