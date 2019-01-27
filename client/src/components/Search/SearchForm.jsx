import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'components/common';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components';

import { LIGHT_BLUE } from 'style/Colors';

const FormWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
  background-color: ${LIGHT_BLUE};
  padding: 12px;
  display: flex;
  align-items: flex-end;
`;

const TextFieldWrapper = styled.div`  
  width: 100%;
`

const setTextState = (newText) => ({
  searchText: newText
});

class SearchForm extends React.Component {
  state = {
    searchText: ''
  };

  handleTextChange = (event) => {
    this.setState(setTextState(event.target.value));
  }

  handleSearch = () => {
    if (this.state.searchText !== '') {
      this.props.searchForGame({searchTerm: this.state.searchText});
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    return (
      <FormWrapper>
        <TextFieldWrapper>
          <TextField
            label="Search for games"
            onChange={this.handleTextChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.searchText}
            autoFocus={true}
            >
          </TextField>
        </TextFieldWrapper>
        <IconButton onClick={this.handleSearch} color="primary" aria-label="Search">
          <SearchIcon />
        </IconButton>
      </FormWrapper>
    )
  }
}

SearchForm.propTypes = {
  searchForGame: PropTypes.func.isRequired,
}

export default SearchForm;