import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

const DetailSideBarLoading = (props) => (
  <LoadingWrapper>
    <CircularProgress />
  </LoadingWrapper>
)

export default DetailSideBarLoading;