import PropertyList from 'components/PropertyList';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';

const App: FC<unknown> = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <h1>Property Listings</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home linkText="Property listings" linkPath="property-listings">
                Welcome to <strong>Fictitious Agency</strong> for property listings. Click the link
                below to get browse available listings.
              </Home>
            </Route>
            <Route path="/property-listings">
              <PropertyList text="properties" />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default App;
