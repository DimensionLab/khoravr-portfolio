//import { initialState } from './selectors';
import { EXPAND_SPHERE_MENU } from './actions';

const initialState = [
  { id: 'front-menu-item-1', expanded: false },
  { id: 'front-menu-item-2', expanded: false },
  { id: 'front-menu-item-3', expanded: false },
  { id: 'behind-menu-item-1', expanded: false },
  { id: 'behind-menu-item-2', expanded: false },
  { id: 'behind-menu-item-3', expanded: false },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_SPHERE_MENU:
      return state.map(sphere => {
        if (sphere.id !== action.id) { return sphere; }

        return {
          ...sphere,
          expanded: !sphere.expanded,
        };
      });
    default:
      return state;
  }
};
