import { initialState } from './selectors';
import { TOGGLE_EXPAND_SPHERE_MENU } from './actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXPAND_SPHERE_MENU:
      console.log(action);
      return {
        ...state,
        menuExpanded: action.menuExpanded,
      }
    default:
      return state;
  };
};
