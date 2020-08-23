import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage'

const RouterComp = () => (   
    <Switch>
      <Route exact path="/" component={LandingPage}/>
   </Switch> 
)

export default RouterComp;