import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import DonorRegistration from '../DonorRegistration';
import Users from '../UsersDashboard';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/users" component={Users} />
    <Route path="/register" component={DonorRegistration} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;
