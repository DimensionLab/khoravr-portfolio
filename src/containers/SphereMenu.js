import { connect } from 'react-redux';
import { expandMenu, fromSphereMenu } from 'store';

import { SphereMenu } from 'components';

const mapStateToProps = (state, { id }) => ({
  menuExpanded: fromSphereMenu.isMenuExpanded(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  expandMenu: () => dispatch(expandMenu(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SphereMenu);
