import React, { useReducer, Dispatch } from 'react';
import './App.scss';
import { Categories } from './Components/Categories/Categories'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/Product/ProductPage';
import { CategoryPage } from './Components/Categories/ItemTypes/CategoryPage'
import { Products } from './Components/Data/data'
import { Wishlist } from './Components/WishList/WishList';
import { productType } from './Components/Product/types';
import { ShoppingList } from './Components/ShoppingCart/ShoppingList'
import { CartProductInterface } from './Components/ShoppingCart/types'
import {Footer} from "./Components/Footer/Footer";
import {Navigation} from "./Components/Navigation/Navigation";
import {FilteredList} from "./Components/Filters/FilteredList";
import {Pagination} from "./Components/Pagination/Pagination";

type InitialStateType = {
  products: productType[],
  cart: CartProductInterface[]
}

export const INITIAL_STATE: InitialStateType = {
  products: Products,
  cart: []
}

export const ACTION = {
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  ADD_TO_BUY: 'ADD_TO_BUY',
  REMOVE: 'REMOVE',
  DELETE_ALL_PRODUCTS: 'DELETE_ALL_PRODUCTS',
  INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
  CHOOSE_PRODUCT_COLOR: 'CHOOSE_PRODUCT_COLOR',
  DELETE_ALL_PRODUCTS_IN_WISHLIST: 'DELETE_ALL_PRODUCTS_IN_WISHLIST'
}
//@ts-ignore - ругается ТС
export const StoreContext = React.createContext<{ state: InitialStateType, dispatch: Dispatch<any> }>();

const reducer = (currentState: any, payLoad: any): InitialStateType  => {
  switch (payLoad.action) {
    case ACTION.ADD_TO_WISHLIST:
      return {
        ...currentState,
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

    case ACTION.ADD_TO_BUY:
      const newCartProducts = [...currentState.cart, payLoad.product]
      return {
        ...currentState,
        cart: newCartProducts
      };

      case ACTION.REMOVE:
      return {
        ...currentState,
        cart: currentState.cart.filter((product: any) => product.id !== payLoad.productId),
      }
    case ACTION.INCREMENT_QUANTITY:
      return {
        ...currentState,
        cart: currentState.cart.map((product: any) => {
            if (product.id === payLoad.productId) {
              return {
                ...product,
                quantity: product?.quantity ? product.quantity + 1 : 1
              }
            }
            return product
        })
      }
    case ACTION.DECREMENT_QUANTITY:
      return {
        ...currentState,
        cart: currentState.cart.map((product: any) => {
          if (product.id === payLoad.productId) {
            return {
              ...product,
              quantity: product?.quantity <= 1 ? product.quantity = 1 : product.quantity - 1
            }
          }
          return product
        })
      }
    case ACTION.CHOOSE_PRODUCT_COLOR:
      return {
        ...currentState,
        cart: currentState.cart.map((product: any) => {
            return {
              ...product,
              color: payLoad.productColor
            }
        })
      }
    case ACTION.DELETE_ALL_PRODUCTS:
      return {
        ...currentState,
        products: []
      };
      case ACTION.DELETE_ALL_PRODUCTS_IN_WISHLIST:
      return {
        ...currentState,
        products: currentState.products.map((product: productType )=> {
          return {
            ...product,
            isFavourite: false
          }
        })
      };
    default: {
      return currentState
    }
  }
}
//
function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route exact path='/shoppingCart'><ShoppingList /></Route>
            <Route exact path='/wishlist'><Wishlist /></Route>
            <Route exact path='/:category'><CategoryPage /></Route>
            <Route path='/:category/:id'><ProductPage /></Route>
            <Route path='/'><FilteredList /></Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </StoreContext.Provider>
  );
}

export default App;


// Вопросы

// 1) пагинация на фильтре : определить ли все стили из фильтра.ссс или можно брать из пагинации.ссс
// 2)