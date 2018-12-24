import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'


import styled from 'styled-components';

import * as Colors from 'style/Colors';

// active class for a NavLink item
const activeClassName = 'active'

const commonStyle = `
  color: ${Colors.WHITE};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.${activeClassName} {
    font-weight: 500;
  }
`;

const StyledNormalLink = styled(Link)`
  ${commonStyle}
`;

const StyledNavLink = styled(NavLink)`
  ${commonStyle}
`;


const StyledLink = (props) => {
  const { isNavLink, ...rest } = props;
  const Component = isNavLink ? StyledNavLink : StyledNormalLink;

  return (
    <Component {...rest} />
  );

}

StyledLink.propTypes = {
  isNavLink: PropTypes.bool,
}

export default StyledLink;