import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={} />
        <Route path="/products" component={} />
      </Switch>
    );
  }
}

export default Routes;
