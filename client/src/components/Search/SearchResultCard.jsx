import React from 'react';

import Moment from 'react-moment';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import styled from 'styled-components';

import { WHITE, GRAY } from 'style/Colors';

const StyledCardDiv = styled.div`
  width: 190px;
  margin: 8px;
  border: 1px ${GRAY} solid;
  padding: 4px;
  box-shadow: 1px 1px 7px 2px rgba(0,0,0,0.06);
  position: relative;
  background-color: ${WHITE};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 1px 2px 8px 4px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.5s ease 0s;
  }

  &:hover::after {
    /*opacity: 1;*/
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
  display: block; /* or inline-block */
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
  //transform: translateX(-50%) translateY(-50%);
  opacity: 0;
  transition: opacity 0.5s ease 0s;
  z-index:1;

  &:hover {
    opacity: 1;
  }
`;

const OverlayButtonWrapper = styled(IconButton)`
  position: absolute;
  top: 3%;
  left: 70%;

  && { 
    background-color: ${WHITE};  
  }

  &&:hover { 
    background-color: ${WHITE};  
  }
  
`
const SearchResultCard = ({id, name, releaseDate, image}) => {

  return (
    <StyledCardDiv>
      <WrapperDiv>
        {image && <StyledImg src={image}></StyledImg>}
        <OverlayWrapper>
          <OverlayButtonWrapper color="primary" aria-label="Add">
            <AddIcon />
          </OverlayButtonWrapper>
        </OverlayWrapper>
        <TextWrapperDiv>
          <Typography variant="body2" >{name}</Typography>
          <Typography variant="caption">
            <Moment format="YYYY/MM/DD">
              {releaseDate}
            </Moment>
          </Typography>
        </TextWrapperDiv>
      </WrapperDiv>
      
    </StyledCardDiv>
  )
}

export default SearchResultCard;
