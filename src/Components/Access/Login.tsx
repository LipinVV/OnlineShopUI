import React, {useContext, useEffect, useState} from 'react'
import {MarketPlace} from "./MarketPlace";
import {supabase} from "../../Admin/Admin";
import {Link} from "react-router-dom";
import {ACTION, StoreContext} from "../../App";

export const Login = () => {
    const [userMail, setUserMail] = useState('vit.lipin@gmail.com');
    const [userPassword, setUserPassword] = useState('password');
    const isUserLoggedIn: boolean = Boolean(supabase.auth.session()?.user?.id)
    const [status, setStatus] = useState(isUserLoggedIn)
    const { state, dispatch } = useContext(StoreContext)
    // vit.lipin@gmail.com
    const signIn = async () => {
        const {user, session, error} = await supabase.auth.signIn({
            email: userMail,
            password: userPassword,
        })
        console.log('session', session)
        dispatch({action: ACTION.LOGIN, data: null})
    }
    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        dispatch({action: ACTION.LOGOUT, data: null})
        // setStatus(!status)
    }

    return (
        <div className='login'>
            {!supabase.auth.session()?.user ? <form className='login__enter'>
                        <MarketPlace/>
                    <h2>Login to Shop Bag</h2>
                    <label className='login__label'>
                        <input className='login-block__input' onChange={(evt) => setUserMail(evt.target.value)} type='text'
                               value={userMail} placeholder='Email' required={true}/>
                    </label>
                    <label className='login__label'>
                        <input className='login-block__input' onChange={(evt) => setUserPassword(evt.target.value)}
                               type='text'
                               value={userPassword} placeholder='Password' required={true}/>
                    </label>
                    <Link className='login__link' to={state.isUserLoggedIn ? '/' : '/login'} onClick={signIn}>Login</Link>
                </form> :
                <form className='login__exit'>
                    <MarketPlace/>
                    <h2>You can sign out:</h2>
                    <div className='login__logout'>
                        <button className='login__logout-btn' type='button' onClick={signOut}>Logout</button>
                        <Link className='login__logout-homepage' to={state.isUserLoggedIn ? '/' : '/login'}>To the Homepage!</Link>
                    </div>
                </form>
            }
        </div>
    )
}
// vit.lipin@gmail.com