import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

import { WHITE, REMOVE_RED } from 'style/Colors';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position:relative;
  //justify-content: space-between;
  align-content: flex-start;
`

const StyledImg = styled.img`
  width: 45px;
  height: 60px;
  padding-right: 4px;
`

const ButtonWrapper = styled.div`
  margin-left: auto;
`

const StyledButton = styled(IconButton)`  
  opacity: 0;
  transition: opacity 0.5s ease 0s;

  ${FlexWrapper}:hover & {
    opacity: 1;
  }
  
  && { 
    padding-top: 0;
    padding-right: 0;
    background-color: ${WHITE};  
  }

  &&:hover { 
    background-color: ${WHITE};  
  }
  
`

const StyledRemoveButton = styled(MenuItem)`
  && {
    color: ${REMOVE_RED}
  }  
`

class CollectionGameCard extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuRemoveFromCollection = () => {
    this.props.removeDispatch(this.props.game);
    this.handleClose();
  }

  handleGetGameDetails = () => {
    this.props.getGameDetails(this.props.game.guid);
    this.handleClose(); 
  }

  render() {
    const { anchorEl } = this.state;
    const { game } = this.props;

    const removeGameFromCollectionButton = (
      <ButtonWrapper>
        <StyledButton 
          color="primary" 
          aria-label="Remove"
          aria-owns={anchorEl ? 'remove-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenuOpen}
        >
          <MoreVertIcon />
        </StyledButton>
        <Menu
          id="remove-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleGetGameDetails}>Details</MenuItem>
          <StyledRemoveButton onClick={this.handleMenuRemoveFromCollection}>Remove</StyledRemoveButton>
        </Menu>
      </ButtonWrapper>
    );


    return (
      <FlexWrapper>
        {game.image && <StyledImg src={game.image.thumb_url}></StyledImg>}
        <Typography variant="body2">{game.name}</Typography>
        {removeGameFromCollectionButton}
      </FlexWrapper>
                  

    )
  }
}

CollectionGameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_release_date: PropTypes.string,
    image: PropTypes.object.isRequired,
  }).isRequired,
  removeDispatch: PropTypes.func.isRequired,
}

export default CollectionGameCard;