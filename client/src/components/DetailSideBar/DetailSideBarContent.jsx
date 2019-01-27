import React from 'react';

import Typography from '@material-ui/core/Typography';

import Moment from 'react-moment';

import styled from 'styled-components';

import DetailSideBarLoading from './DetailSideBarLoading';

const OuterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;

`
const StyledImg = styled.img`
  width: 100%;
  height: 168px;
`

const InnerContentWrapper = styled.div`
  padding: 16px;
`

const DetailSideBarContent = (props) => {
  const { game, loading, ...rest} = props;
  
  if (loading) {
    return (
      <DetailSideBarLoading />
    )
  }

  // if we dont any any game to display then show placeholder text
  if (typeof game === 'undefined') {
    return (
      <InnerContentWrapper>
        <Typography variant="body2">No game selected</Typography>
      </InnerContentWrapper>
    )
  }

  return (
    <OuterContentWrapper {...rest}>
      {game.image && <StyledImg src={game.image.screen_url}></StyledImg>}
      <InnerContentWrapper>
        <Typography variant="h6" >{game.name}</Typography>
        <Typography variant="caption">
          <Moment format="YYYY/MM/DD">
            {game.original_release_date}
          </Moment>
        </Typography>
        <Typography variant="body2">{game.deck}</Typography>
      </InnerContentWrapper>
    </OuterContentWrapper>
  )
}

export default DetailSideBarContent;