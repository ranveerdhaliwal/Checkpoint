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
  const { label, value, onChange, ...rest } = props;

  return (
    <TextFieldWrapper
      id="standard-controlled"
      label={label}
      margin="normal"
      value={value}
      onChange={onChange}
      autoComplete="off"
      {...rest}
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