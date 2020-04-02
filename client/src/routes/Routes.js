/**
 * @file routes.js
 *
 * Manages browser router navigation within the application.
 */

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';

const Home = React.lazy(() => import('@/pages/Home'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path={Routes.HOME} component={Home} />
      <Route path={Routes.WILDCARD} component={NotFound} />
    </Switch>
  </Suspense>
);
