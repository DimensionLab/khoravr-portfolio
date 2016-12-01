import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, HomePage, PageNotFound } from 'components';

function checkForRedirect(nextState, replace) {
  const location = nextState.location;
  if (location.query.redirect === 'true') {
    parseRedirectQuery(location.query, replace);
  } else if (location.pathname.split('/')[1] === gitHubRepoName) {
    redirectToDomain();
  }
}

function parseRedirectQuery(query, replace) {
  const redirectTo = {};

  if (typeof query.pathname === 'string' && query.pathname !== '') {
    redirectTo.pathname = query.pathname;
  }

  if (typeof query.query === 'string' && query.query !== '') {
    const queryObject = {};
    query.query.split('&').map(q => q.split('=')).forEach((arr) => {
      queryObject[arr[0]] = arr.slice(1).join('=');
    });
    redirectTo.query = queryObject;
  }

  if (typeof query.hash === 'string' && query.hash !== '') {
    redirectTo.hash = `#${query.hash}`;
  }

  replace(redirectTo);
}

const gitHubRepoName = 'mathworld';
const domain = 'https://dimensionlab.github.io';
function redirectToDomain() {
  window.location.replace(domain);
}

const routes = (
  <Route path="/" component={App} onEnter={checkForRedirect}>
    <IndexRoute component={HomePage} />
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

export default routes;
