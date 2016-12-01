import _ from 'lodash';

export const isMenuExpanded = (state, id) => {
  return _.find(state, { id }).expanded;
};
