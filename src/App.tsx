import React, { FC } from 'react';
import PropertyList from 'components/PropertyList';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import DevelopersNotes from 'components/DevelopersNotes';

const App: FC<unknown> = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <Link to="/">
            <h1>Property Listings</h1>
          </Link>
        </div>
      </header>
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home linkText="Property listings" linkPath="property-listings">
                Welcome to <strong>Fictitious Agency</strong> for property
                listings. Click the link below to browse available listings and
                add some gems to your favorites!
              </Home>
            </Route>
            <Route path="/property-listings">
              <PropertyList />
            </Route>
            <Route path="/developers-notes">
              <DevelopersNotes />
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <NavLink to="/property-listings">Property Listings</NavLink>
            </li>
            <li>
              <NavLink to="/developers-notes">Developers Notes</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default App;
