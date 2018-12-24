import React from 'react';

import styled from 'styled-components';

import { StyledLink } from 'components/common';

const StyledWrapper = styled.div`
  padding: 0 20px;
`;

const StyledLinkWrapper = styled.div`
  padding: 0 12px;  
  display: inline-block;
`;

const NavLinkHolder = (props) => (
  <StyledWrapper>
    <StyledLinkWrapper>
      <StyledLink isNavLink to="/Search">Search</StyledLink>
    </StyledLinkWrapper>
    <StyledLinkWrapper>
      <StyledLink isNavLink to="/Collection">My Collection</StyledLink>
    </StyledLinkWrapper>
  </StyledWrapper>
)

export default NavLinkHolder;