import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from 'components/common/TextField';

//import styled from 'styled-components';\

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
      <>
        <TextField
          label="Search for games"
          onChange={this.handleTextChange}
          value={this.state.searchText}
          >
        </TextField>
        <Button onClick={this.handleSearch}>
          Search
        </Button>
      </>
    )
  }
}

export default SearchForm;