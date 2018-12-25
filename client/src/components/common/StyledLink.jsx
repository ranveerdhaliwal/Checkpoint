import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

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
    <Typography variant="subtitle2">
      <Component {...rest} />
    </Typography>
  );

}

StyledLink.propTypes = {
  isNavLink: PropTypes.bool,
}

export default StyledLink;