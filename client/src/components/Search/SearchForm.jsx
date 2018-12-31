import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'components/common';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components';

const FormWrapper = styled.div`
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
    this.props.searchForGame(this.state.searchText);
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