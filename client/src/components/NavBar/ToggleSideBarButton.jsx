import React from 'react';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { toggleSidebar } from 'components/DetailSideBar/ducks';


const ToggleSideBarButton = (props) => {

  return (
    <Button
      color="inherit"
      onClick={props.toggleSideBar}
    >
    Toggle Sidebar
    </Button>
  )
}

const mapDispatchFromProps = (dispatch) => ({
  toggleSideBar: () => dispatch(toggleSidebar())
});

export default connect(null, mapDispatchFromProps)(ToggleSideBarButton);