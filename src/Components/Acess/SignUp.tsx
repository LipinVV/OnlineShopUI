import React, {useState} from 'react';
import {MarketPlace} from "./MarketPlace";
import './acess.scss'
import {supabase} from "../../Admin/Admin";


export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');

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
            </div>
        </div>
    )
}