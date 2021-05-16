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
import { Cart } from './Components/ShoppingCart/Cart'

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='app__navigation'>
          <ul className='app__links'>
            <li className='app__link'><Link to='/'>Home</Link></li>
            <li className='app__link'><Link to='/categories'>Categories</Link></li>
            <li className='app__link'><Link to='/gallery'>Gallery</Link></li>
            <li className='app__link'><Link to='/articles'>Articles</Link></li>
            <li className='app__link'><Link to='/cart'>Shop Bag</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/cart'><Cart /></Route>
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
