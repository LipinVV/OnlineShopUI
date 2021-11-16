import {supabase} from "../../admin/Admin";
import React, {useContext, useState} from 'react';
import {ACTION, StoreContext} from "../../App";
import {MarketPlace} from "./MarketPlace";
import {Link} from "react-router-dom";

export const Login = () => {
    const [userMail, setUserMail] = useState('vit.lipin@gmail.com');
    const [userPassword, setUserPassword] = useState('password');
    const { state, dispatch } = useContext(StoreContext)
    const signIn = async () => {
        const {user, session, error} = await supabase.auth.signIn({
            email: userMail,
            password: userPassword,
        })
        dispatch({action: ACTION.LOGIN, data: null})
    }
    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        dispatch({action: ACTION.LOGOUT, data: null})
    }

    return (
        <div className='login'>
            {!supabase.auth.session()?.user ? <div className='login__enter'>
                        <MarketPlace/>
                    <h2 className='login__header'>Login to Shop Bag</h2>
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
                </div> :
                <div className='login__exit'>
                    <MarketPlace/>
                    <h2>You can sign out:</h2>
                    <div className='login__logout'>
                        <button className='login__logout-btn' type='button' onClick={signOut}>Logout</button>
                        <Link className='login__logout-homepage' to={state.isUserLoggedIn ? '/' : '/login'}>To the Homepage!</Link>
                    </div>
                </div>
            }
        </div>
    )
}