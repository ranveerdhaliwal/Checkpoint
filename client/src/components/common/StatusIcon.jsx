import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LoopIcon from '@material-ui/icons/Loop';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Tooltip from '@material-ui/core/Tooltip';

import { WHITE, GREEN } from 'style/Colors';

const OverlayIconWrapper = styled.div`
  position: absolute;
  top: 3%;
  left: 5%;
  height: 24px;
  border-radius: 12px;
  color: ${GREEN};
  background-color: ${WHITE};
  display: inline-block;
`;

const StatusIcon = (props) => {
  const { foundInProgress, foundInCompleted, foundInBacklog } = props;

  let IconToReturn;
  let title;
  if (foundInProgress) {
    IconToReturn = LoopIcon;
    title = 'In Progress';
  } else if (foundInCompleted) {
    IconToReturn = CheckCircleIcon;
    title = 'Completed';
  } else if (foundInBacklog) {
    IconToReturn = BookmarkIcon;
    title = 'Backlog';
  }

  return (
    <Tooltip title={title} >
      <OverlayIconWrapper>
        <IconToReturn></IconToReturn>
      </OverlayIconWrapper>
    </Tooltip>
  )
}

StatusIcon.propTypes = {
  foundInProgress: PropTypes.bool.isRequired, 
  foundInCompleted: PropTypes.bool.isRequired, 
  foundInBacklog: PropTypes.bool.isRequired, 
};

export default StatusIcon;
