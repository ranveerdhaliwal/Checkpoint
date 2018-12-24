import React from 'react';
import PropTypes from 'prop-types';

import {default as MUITextField} from '@material-ui/core/TextField';

import styled from 'styled-components';

const TextFieldWrapper = styled(MUITextField)`
  
  && {
    width: 100%;
  }
  
`
const TextField = (props) => {
  return (
    <TextFieldWrapper
      id="standard-controlled"
      label={props.label}
      margin="normal"
      value={props.value}
      onChange={props.onChange}
      autoComplete="off"
    >
    </TextFieldWrapper>
  );

}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextField.defaultProps = {
  label: 'Text Field'
};

export default TextField;