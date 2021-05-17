import React from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/Product/ProductPage';
import { CategoryPage } from './Components/Categories/ItemTypes/CategoryPage'

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
          </ul>
        </nav>

        <Switch>
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route path='/:category'><CategoryPage /></Route>
          <Route path='/:category/:id'><ProductPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


// 1) ключи выставить
// 2) объединить ItemTypes
// 3) стили
{/* <Switch>
  <Route path='/cart'><CategoryPage /></Route>
  <Route path='/categories'>
    <Categories />
  </Route>
  <Route exact path='/beds'><ItemBed /></Route>
  <Route exact path='/chairs'><ItemChairs /></Route>
  <Route exact path='/desks'><ItemDesk /></Route>
  <Route exact path='/cupboards'><ItemCupboard /></Route>
  <Route exact path='/sofas'><ItemSofa /></Route>
  <Route exact path='/carpets'><ItemCarpet /></Route>
  <Route path='/:category/:id'><ProductPage /></Route>
</Switch> */}