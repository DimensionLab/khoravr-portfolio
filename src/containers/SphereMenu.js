import { connect } from 'react-redux';
import { expandMenu, fromSphereMenu } from 'store';

import { SphereMenu } from 'components';

const mapStateToProps = (state) => ({
  menuExpanded: fromSphereMenu.isMenuExpanded(state),
});

const mapDispatchToProps = (dispatch, { menuExpanded }) => ({
  expandMenu: (menuExpanded) => dispatch(expandMenu(menuExpanded)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SphereMenu);
