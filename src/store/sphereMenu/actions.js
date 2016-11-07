export const TOGGLE_EXPAND_SPHERE_MENU = 'TOGGLE_EXPAND_SPHERE_MENU';

export const expandMenu = (menuExpanded) => {
  return { type: TOGGLE_EXPAND_SPHERE_MENU, menuExpanded: !menuExpanded };
};
