import React, { useContext, useReducer, Dispatch } from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/Product/ProductPage';
import { CategoryPage } from './Components/Categories/ItemTypes/CategoryPage'
import { Products } from './Components/Data/data'
import { Wishlist } from './Components/WishList/WishList';
import { productType } from './Components/Product/types';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart'

type InitialStateType = {
  products: productType[]
}

export const INITIALSTATE = {
  products: Products,
}
//@ts-ignore - ругается ТС
export const StoreContext = React.createContext<{ state: InitialStateType, dispatch: Dispatch<any> }>();

const reducer = (currentState: any, payLoad: any) => {
  switch (payLoad.action) {
    case 'ADD_TO_WISHLIST':
      return {
        products: currentState.products.map((product: any) => {
          if (product.id === payLoad.productId) {
            return {
              ...product,
              isFavourite: !product.isFavourite
            }
          }
          return product;
        })
      };
    case 'ADD_TO_BUY':
      return {
        products: currentState.products.map((product: any) => {
          if (product.id === payLoad.productId) {
            return {
              ...product,
              toBuy: !product.toBuy
            }
          }
          return product;
        })
      };
    case 'DELETE_ALL_PRODUCTS':
      return {
        products: []
      };
    default: {
      return currentState
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Router>
          <nav className='app__navigation'>
            <ul className='app__links'>
              <li className='app__link'><Link to='/'>Home</Link></li>
              <li className='app__link'><Link to='/shoppingCart'>Shopping Cart</Link></li>
              <li className='app__link'><Link to='/categories'>Categories</Link></li>
              <li className='app__link'><Link to='/wishlist'>WishList</Link></li>
              <li className='app__link'><Link to='/gallery'>Gallery</Link></li>
              <li className='app__link'><Link to='/articles'>Articles</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route exact path='/shoppingCart'><ShoppingCart /></Route>
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

// Вопросы
// 1) state с продуктами - нужно ли прокинуть вообще везде? вызывает затроение например в Categories
// 2) нужно прокинуть totalPrice из ProductCard -> SingleCard
// 3) плавное прожатие кнопок
// 4) SingleCard Color label - можно ли по-другому определить вывод с большой буквы
// 5) Передача значения итоговой суммы в ShoppingPage, перерасчёт полной суммы при увеличении изделий 