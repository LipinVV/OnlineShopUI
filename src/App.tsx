import React, { useContext } from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/Product/ProductPage';
import { CategoryPage } from './Components/Categories/ItemTypes/CategoryPage'
import { CartContext } from './Components/Context/CartContext'
import { StateChanger } from './Components/reducer';

function App() {
  const contextValue = useContext(CartContext);
  return (
    <CartContext.Provider value={contextValue}>
      <div className='App'>
        <Router>
          <nav className='app__navigation'>
            <ul className='app__links'>
              <li className='app__link'><Link to='/'>Home</Link></li>
              <li className='app__link'><Link to='/categories'>Categories</Link></li>
              <li className='app__link'><Link to='/gallery'>Gallery</Link></li>
              <li className='app__link'><Link to='/articles'>Articles</Link></li>
              <StateChanger />
            </ul>
          </nav>

          <Switch>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route exact path='/:category'><CategoryPage /></Route>
            <Route path='/:category/:id'><ProductPage /></Route>
          </Switch>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;


// 1) ключи выставить
