import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import { reducer } from '.';

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined';

  const composeEnhancers = hasWindow && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const finalCreateStore = composeEnhancers(
    applyMiddleware(routerMiddleware(history), createLogger())
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('.', () => {
      const nextReducer = require('.').reducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
