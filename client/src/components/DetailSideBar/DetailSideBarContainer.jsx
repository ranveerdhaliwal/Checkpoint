import { connect } from 'react-redux';

import DetailSideBar from './DetailSideBar';

import { toggleSidebar } from './ducks';

const mapStateToProps = (state) => ({
  open: state.detail.open,
  loading: state.detail.loading,
  results: state.detail.results,
  currentGameID: state.detail.currentGameID
});

const mapDispatchFromProps = (dispatch) => ({
  toggleSideBar: () => dispatch(toggleSidebar())
});


export default connect(mapStateToProps, mapDispatchFromProps)(DetailSideBar);