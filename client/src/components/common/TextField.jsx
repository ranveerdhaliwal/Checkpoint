import React from 'react';
import PropTypes from 'prop-types';

import {default as MUITextField} from '@material-ui/core/TextField';

const TextField = (props) => {
  return (
    <MUITextField
      id="standard-controlled"
      label={props.label}
      margin="normal"
      value={props.value}
      onChange={props.onChange}
      autoComplete="off"
    >
    </MUITextField>
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