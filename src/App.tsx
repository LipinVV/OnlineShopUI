import React from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { ItemSofa } from './Components/Categories/ItemTypes/Sofas'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ItemChairs } from './Components/Categories/ItemTypes/Chairs';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/articles">Articles</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/sofas"><ItemSofa /></Route>
            <Route exact path="/chairs"><ItemChairs /></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
