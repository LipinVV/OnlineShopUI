import React, {Dispatch, useEffect, useReducer} from 'react';
import './App.scss';
import {Categories} from './Components/Categories/Categories'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {ProductPage} from './Components/Product/ProductPage';
import {CategoryPage} from './Components/Categories/ItemTypes/CategoryPage'
import {Wishlist} from './Components/WishList/WishList';
import {productType} from './Components/Product/types';
import {ShoppingList} from './Components/ShoppingCart/ShoppingList'
import {CartProductInterface} from './Components/ShoppingCart/types'
import {Footer} from "./Components/Footer/Footer";
import {Navigation} from "./Components/Navigation/Navigation";
import {FilteredList} from "./Components/Filters/FilteredList";
import {Landing} from "./Components/Landing/Landing";
import {BestSellersBase} from "./Components/Landing/BestSellers/BestSellersBase";
import {Admin} from './Admin/Admin';
import {createClient} from "@supabase/supabase-js";
import {SignUp} from "./Components/Access/SignUp";
import {Login} from "./Components/Access/Login";

const supabase = createClient('https://xhvnywjafhcirlskluzp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU5MjA4OSwiZXhwIjoxOTQxMTY4MDg5fQ.wmUD2lxoMGSRnK5gRaNpxUDVPOd5fH6C41GZdOm_at0')

const userLoggedIn = supabase.auth.session()?.user;
type StateType = {
    products: productType[],
    cart: CartProductInterface[]
    isUserLoggedIn: boolean
}
export const INITIAL_STATE: StateType = {
    products: [],
    cart: [],
    isUserLoggedIn: Boolean(supabase.auth.session()?.user?.id)
}
// console.log('INITIAL_STATE.1', INITIAL_STATE)
export const dataFetcher = async () => {
    try {
        const {data}: any = await supabase.from('data').select()
        return data.map((product: productType[]) => {
            return {...product, isFavourite: false, toBuy: false}
        })
    } catch (error) {
        console.log(error)
    }
}

// console.log('INITIAL_STATE.2', INITIAL_STATE)

export enum ACTION {
    ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
    ADD_TO_BUY = 'ADD_TO_BUY',
    REMOVE = 'REMOVE',
    DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS',
    INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
    CHOOSE_PRODUCT_COLOR = 'CHOOSE_PRODUCT_COLOR',
    DELETE_ALL_PRODUCTS_IN_WISHLIST = 'DELETE_ALL_PRODUCTS_IN_WISHLIST',
    GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

// const dispatch1: ACTION = ACTION.ADD_TO_WISHLIST  <== difference, make a concrete CONST through enum
type ActionType = { action: ACTION, data: any }
export const StoreContext = React.createContext<{ state: StateType, dispatch: Dispatch<ActionType> }>({
    state: INITIAL_STATE,
    dispatch: () => null
});

const reducer = (currentState: StateType, payLoad: ActionType): StateType => {
    switch (payLoad.action) {
        case ACTION.ADD_TO_WISHLIST:
            return {
                ...currentState,
                products: currentState.products.map((product: productType) => {
                    if (product.id === payLoad.data.productId) {
                        return {
                            ...product,
                            isFavourite: !product.isFavourite
                        }
                    }
                    return product;
                })
            };

        case ACTION.ADD_TO_BUY:
            const newCartProducts = [...currentState.cart, payLoad.data.product]
            return {
                ...currentState,
                cart: newCartProducts
            };

        case ACTION.REMOVE:
            return {
                ...currentState,
                cart: currentState.cart.filter((product: productType) => product.id !== payLoad.data.productId),
            }
        case ACTION.INCREMENT_QUANTITY:
            return {
                ...currentState,
                cart: currentState.cart.map((product: CartProductInterface) => {
                    if (product.id === payLoad.data.productId) {
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
                cart: currentState.cart.map((product: CartProductInterface) => {
                    if (product.id === payLoad.data.productId) {
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
                cart: currentState.cart.map((product: CartProductInterface) => {
                    return {
                        ...product,
                        color: payLoad.data.productColor
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
                products: currentState.products.map((product: productType) => {
                    return {
                        ...product,
                        isFavourite: false
                    }
                })
            };
        case ACTION.GET_ALL_PRODUCTS:
            return {
                ...currentState,
                products: payLoad.data
            };

        case ACTION.LOGIN: {
            return {
                ...currentState,
                isUserLoggedIn: true
            }
            // if(!INITIAL_STATE.isUserLoggedIn) {
            //     return {
            //         ...currentState,
            //         isUserLoggedIn: true
            //     }
            // } else {
            //     return {
            //         ...currentState,
            //         isUserLoggedIn: false
            //     }
            // }
        }
        case ACTION.LOGOUT: {
            return {
                ...currentState,
                isUserLoggedIn: false
            }
        }
        default: {
            return currentState
        }
    }
}

// postgres causes stress
function App() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    useEffect(() => {
        dataFetcher().then(products => {
            dispatch({action: ACTION.GET_ALL_PRODUCTS, data: products})
        })
    }, [])
    console.log('in APP component login / logout status is: ', state.isUserLoggedIn)
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            <div className='App'>
                <Router>
                    <Navigation/>
                    <Switch>
                        {!state.isUserLoggedIn ?
                            <>
                                <Route path='/signUp'><SignUp/></Route>
                                <Route path='/login'><Login/></Route>
                            </> : null
                        }
                    </Switch>
                    {state.isUserLoggedIn ?
                        <>
                            <Switch>
                                <Route path='/categories'>
                                    <Categories/>
                                </Route>
                                <Route path='/login'><Login/></Route>
                                <Route path='/signUp'><SignUp/></Route>
                                <Route path='/admin'><Admin/></Route>
                                <Route path='/bestsellers'><BestSellersBase/></Route>
                                <Route exact path='/filter'><FilteredList/></Route>
                                <Route exact path='/shoppingCart'><ShoppingList/></Route>
                                <Route exact path='/wishlist'><Wishlist/></Route>
                                <Route exact path='/:category'><CategoryPage/></Route>
                                <Route path='/:category/:id'><ProductPage/></Route>
                                <Route path='/'><Landing/></Route>
                            </Switch>
                        </>
                        :
                        <Redirect to='/signUp'/>
                    }
                </Router>
            </div>
            <Footer/>
        </StoreContext.Provider>
    );
}

export default App;

{/*<Route path='/categories'>*/
}
{/*    <Categories/>*/
}
{/*</Route>*/
}
{/*<Route path='/login'><Login/></Route>*/
}
{/*<Route path='/signUp'><SignUp/></Route>*/
}

{/*{state.isUserLoggedIn && <Router>*/
}
{/*    <Navigation/>*/
}
{/*    <Switch>*/
}
{/*        <Route path='/categories'>*/
}
{/*            <Categories/>*/
}
{/*        </Route>*/
}
{/*        <Route path='/login'><Login/></Route>*/
}
{/*        <Route path='/signUp'><SignUp/></Route>*/
}
{/*        <Route path='/admin'><Admin/></Route>*/
}
{/*        <Route path='/bestsellers'><BestSellersBase/></Route>*/
}
{/*        <Route exact path='/filter'><FilteredList/></Route>*/
}
{/*        <Route exact path='/shoppingCart'><ShoppingList/></Route>*/
}
{/*        <Route exact path='/wishlist'><Wishlist/></Route>*/
}
{/*        <Route exact path='/:category'><CategoryPage/></Route>*/
}
{/*        <Route path='/:category/:id'><ProductPage/></Route>*/
}
{/*        <Route path='/'><Landing/></Route>*/
}
{/*    </Switch>*/
}
{/*</Router>*/
}
{/*}*/
}
{/*{!state.isUserLoggedIn &&*/
}
{/*<Router>*/
}
{/*    <Login/>*/
}
{/*</Router>*/
}
{/*}*/
}

{/*<Router>*/
}
{/*    <Navigation/>*/
}
{/*    <Switch>*/
}
{/*        {state.isUserLoggedIn &&*/
}
{/*        <><Route path='/categories'>*/
}
{/*            <Categories/>*/
}
{/*        </Route>*/
}
{/*            <Route path='/login'><Login/></Route>*/
}
{/*            <Route path='/signUp'><SignUp/></Route>*/
}
{/*            <Route path='/admin'><Admin/></Route>*/
}
{/*            <Route path='/bestsellers'><BestSellersBase/></Route>*/
}
{/*            <Route exact path='/filter'><FilteredList/></Route>*/
}
{/*            <Route exact path='/shoppingCart'><ShoppingList/></Route>*/
}
{/*            <Route exact path='/wishlist'><Wishlist/></Route>*/
}
{/*            <Route exact path='/:category'><CategoryPage/></Route>*/
}
{/*            <Route path='/:category/:id'><ProductPage/></Route>*/
}
{/*            <Route path='/'><Landing/></Route></>*/
}
{/*        }*/
}
{/*        {!state.isUserLoggedIn ? <Login /> : null}*/
}
{/*    </Switch>*/
}
{/*</Router>*/
}

// <Router>
//     <Navigation/>
//     <Switch>
//         {state.isUserLoggedIn &&
//         <><Route path='/categories'>
//             <Categories/>
//         </Route>
//             <Route path='/login'><Login/></Route>
//             <Route path='/signUp'><SignUp/></Route>
//             <Route path='/admin'><Admin/></Route>
//             <Route path='/bestsellers'><BestSellersBase/></Route>
//             <Route exact path='/filter'><FilteredList/></Route>
//             <Route exact path='/shoppingCart'><ShoppingList/></Route>
//             <Route exact path='/wishlist'><Wishlist/></Route>
//             <Route exact path='/:category'><CategoryPage/></Route>
//             <Route path='/:category/:id'><ProductPage/></Route>
//             <Route path='/'><Landing/></Route></>
//         }
//         {!state.isUserLoggedIn && <Redirect to='/login'/>}
//     </Switch>
// </Router>