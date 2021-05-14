import React from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { ItemSofa } from './Components/Categories/ItemTypes/Sofas'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ItemChairs } from './Components/Categories/ItemTypes/Chairs';
import { ItemBed } from './Components/Categories/ItemTypes/Beds';
import { ItemDesk } from './Components/Categories/ItemTypes/Desks';
import { ItemCupboard } from './Components/Categories/ItemTypes/Cupboards';
import { ItemCarpet } from './Components/Categories/ItemTypes/Carpets';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/articles'>Articles</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route exact path='/beds'><ItemBed /></Route>
          <Route exact path='/chairs'><ItemChairs /></Route>
          <Route exact path='/desks'><ItemDesk /></Route>
          <Route exact path='/cupboards'><ItemCupboard /></Route>
          <Route exact path='/sofas'><ItemSofa /></Route>
          <Route exact path='/carpets'><ItemCarpet /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
