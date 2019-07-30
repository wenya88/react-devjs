import React from 'react'
import { Router, Switch } from 'dva/router';

import routerConfig from './utils/router';
import SubRoutes from './utils/subRoutes'


function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          routerConfig.map((route, i) => (
             <SubRoutes key={i} {...route} app={app} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;



