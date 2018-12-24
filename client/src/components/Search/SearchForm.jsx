import React from 'react';

import Button from '@material-ui/core/Button';
import { TextField } from 'components/common';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Grid from '@material-ui/core/Grid';

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
  constructor(props){
    super(props);

    this.state = {
      searchText: ''
    };
  }

  handleTextChange = (event) => {
    this.setState(setTextState(event.target.value));
  }

  handleSearch = () => {
    this.props.searchForGame(this.state.searchText);
  }

  render() {
    return (
      <FormWrapper>
          <TextFieldWrapper>
            <TextField
              label="Search for games"
              onChange={this.handleTextChange}
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

export default SearchForm;