import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Moment from 'react-moment';

import styled, { keyframes } from 'styled-components';

import { StatusIcon } from 'components/common';

import { WHITE, GRAY } from 'style/Colors';

const SlideAndFadeIn = keyframes`
  from {
    transform: translate3d(0, -1%, 0);
    opacity: 0;
    visibility: visible;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const StyledCardDiv = styled.div`
  width: 190px;
  margin: 8px;
  border: 1px ${GRAY} solid;
  padding: 4px;
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.06);
  position: relative;
  background-color: ${WHITE};
  
  animation: ${SlideAndFadeIn} 1s ease 0s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 1px 2px 8px 4px rgba(0,0,0,0.1);
    opacity: 0;
    transition: opacity 0.5s ease 0s;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }
`

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled.img`
  width: 180px;
  height: 240px;
`

const TextWrapperDiv = styled.div`
  padding: 12px 4px 0;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 18px;
  max-height: 100px;
`

const OverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index:2;
`

const OverlayMenuButtonWrapper = styled(IconButton)`
  position: absolute;
  top: 3%;
  left: 70%;
  box-shadow: 1px 1px 3px 6px rgba(0,0,0,0.1);

  opacity: 0;
  transition: opacity 0.5s ease 0s;

  ${OverlayWrapper}:hover & {
    opacity: 1;
  }
  
  && { 
    background-color: ${WHITE};  
  }

  &&:hover { 
    background-color: ${WHITE};  
  }
  
`

const OverlayDetailButtonWrapper = styled(Button)`
  
  top: 65%;
  left: 30%;
  box-shadow: 1px 1px 2px 4px rgba(0,0,0,0.1);

  opacity: 0;
  transition: opacity 0.5s ease 0s;

  ${OverlayWrapper}:hover & {
    opacity: 1;
  }
  
  && { 
    background-color: ${WHITE};  
    position: absolute;
  }

  &&:hover { 
    background-color: ${WHITE};  
  }
  
`

class SearchResultCard extends React.PureComponent {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuAddToInProgress = () => {
    this.props.addToInProgress(this.props.game);
    this.handleClose();
  }

  handleMenuAddToCompleted = () => {
    this.props.addToCompleted(this.props.game);
    this.handleClose();
  }

  handleMenuAddToBacklog = () => {
    this.props.addToBacklog(this.props.game);
    this.handleClose();
  }

  handleGetGameDetails = () => {
    this.props.getGameDetails(this.props.game.guid);
    this.handleClose(); 
  }

  render() {
    const { anchorEl } = this.state;
    const { game, foundInProgress, foundInCompleted, foundInBacklog } = this.props;

    const alreadyInCollection = foundInProgress || foundInCompleted || foundInBacklog;
    
    const addToCollectionButton = (
      <>
        <OverlayMenuButtonWrapper 
          color="primary" 
          aria-label="Add"
          aria-owns={anchorEl ? 'add-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenuOpen}
        >
          <MoreVertIcon />
        </OverlayMenuButtonWrapper>
        <Menu
          id="add-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleMenuAddToBacklog}>Add to Backlog</MenuItem>
          <MenuItem onClick={this.handleMenuAddToCompleted}>Add to Completed</MenuItem>
          <MenuItem onClick={this.handleMenuAddToInProgress}>Add to In Progress</MenuItem>
          <MenuItem onClick={this.handleGetGameDetails}>Details</MenuItem>
        </Menu>
      </>
    );

    const hoverButton = (
      alreadyInCollection ? 
        <StatusIcon
          foundInProgress={foundInProgress}
          foundInCompleted={foundInCompleted}
          foundInBacklog={foundInBacklog}
        >
        </StatusIcon>
      : 
        addToCollectionButton
    );

    const hoverDetailButton = (
      <OverlayDetailButtonWrapper
        color="inherit"
        onClick={this.handleGetGameDetails}
      >
      Details
      </OverlayDetailButtonWrapper>
    );

    return (
      <StyledCardDiv>
        <WrapperDiv>
          {game.image && <StyledImg src={game.image.small_url}></StyledImg>}
          <OverlayWrapper>
            {hoverButton}
            {hoverDetailButton}
          </OverlayWrapper>
          <TextWrapperDiv>
            <Typography variant="body2" >{game.name}</Typography>
            <Typography variant="caption">
              <Moment format="YYYY/MM/DD">
                {game.original_release_date}
              </Moment>
            </Typography>
          </TextWrapperDiv>
        </WrapperDiv>
      </StyledCardDiv>
    )
  }
}

SearchResultCard.propTypes = {
  addToInProgress: PropTypes.func.isRequired,
  addToCompleted: PropTypes.func.isRequired,
  addToBacklog: PropTypes.func.isRequired,
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_release_date: PropTypes.string,
    image: PropTypes.object.isRequired,
  }).isRequired,
  foundInProgress: PropTypes.bool.isRequired,
  foundInCompleted: PropTypes.bool.isRequired,
  foundInBacklog: PropTypes.bool.isRequired,
};

export default SearchResultCard;
