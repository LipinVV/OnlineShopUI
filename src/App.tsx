import React, { useContext, useReducer, Dispatch } from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/Product/ProductPage';
import { CategoryPage } from './Components/Categories/ItemTypes/CategoryPage'
import { products } from './Components/Data/data'
import { Wishlist } from './Components/WishList/WishList';
import { productType } from './Components/Product/types';

type InitialStateType = {
  products: productType[]
}

const INITIALSTATE = {
  products: products,
}
//@ts-ignore
export const StoreContext = React.createContext<{ state: InitialStateType, dispatch: Dispatch<any> }>({INITIALSTATE, dispatch: () => console.log('DISPATCHED')});
console.log(INITIALSTATE)
const stateUpdater = (action: any, state: any) => {
  console.log('action (APP) =>', action, 'state (APP) =>', state)
}

function App() {
  // @ts-ignore
  const [state, dispatch] = useReducer(stateUpdater, INITIALSTATE);
  return (
    // @ts-ignore
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Router>
          <nav className='app__navigation'>
            <ul className='app__links'>
              <li className='app__link'><Link to='/'>Home</Link></li>
              <li className='app__link'><Link to='/categories'>Categories</Link></li>
              <li className='app__link'><Link to='/gallery'>Gallery</Link></li>
              <li className='app__link'><Link to='/articles'>Articles</Link></li>
              <li className='app__link'><Link to='/wishlist'>WishList</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route exact path='/wishlist'><Wishlist /></Route>
            <Route exact path='/:category'><CategoryPage /></Route>
            <Route path='/:category/:id'><ProductPage /></Route>

          </Switch>
        </Router>
      </div>
    </StoreContext.Provider>
  );
}

export default App;


// 1) ключи выставить
