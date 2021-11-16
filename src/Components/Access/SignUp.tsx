import {supabase} from "../../Admin/Admin";
import {StoreContext} from "../../App";
import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {MarketPlace} from "./MarketPlace";
import './acess.scss';


export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { state } = useContext(StoreContext);
    const signUp = async () => {
        const { user, session, error } = await supabase.auth.signUp({
            email: userMail,
            password: userPassword,
        })
    }

    return (
        <div className='sign-up'>
            <MarketPlace/>
            <div className='sign-up__information'>
                <label className='sign-up__label'>
                    <input className='sign-up__input' onChange={(evt) => setUserName(evt.target.value)} type='text'
                           value={userName} placeholder='Username' required={true}/>
                </label>
                <label className='sign-up__label'>
                    <input className='sign-up__input' onChange={(evt) => setUserMail(evt.target.value)} type='text'
                           value={userMail} placeholder='Email' required={true}/>
                </label>
                <label className='sign-up__label'>
                    <input className='sign-up__input' onChange={(evt) => setUserPhone(evt.target.value)} type='text'
                           value={userPhone} placeholder='Phone' required={true}/>
                </label>
                <label className='sign-up__label'>
                    <input className='sign-up__input' onChange={(evt) => setUserPassword(evt.target.value)} type='text'
                           value={userPassword} placeholder='Password' required={true}/>
                </label>
                <div className='sign-up__btn-wrapper'>
                    <button className='sign-up__button' type='submit' onClick={signUp}>Register</button>
                </div>
                {!state.isUserLoggedIn ? <Link className='sign-up__link' to={state.isUserLoggedIn ? '/' : '/login'}>Already our client? Click
                    here!</Link> : null}
            </div>
        </div>
    )
}