import React, {useEffect, useState} from 'react'
import {MarketPlace} from "./MarketPlace";
import {supabase} from "../../Admin/Admin";
import {Link} from "react-router-dom";


const isUserLoggedIn: boolean = Boolean(supabase.auth.session()?.user?.id)
console.log(supabase.auth.session()?.user)
export const Login = () => {
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [status, setStatus] = useState(isUserLoggedIn)
    // vit.lipin@gmail.com
    const signIn = async () => {
        const {user, session, error} = await supabase.auth.signIn({
            email: userMail,
            password: userPassword,
        })
        console.log('session', session)
        error ? setStatus(false) : setStatus(true)
    }
    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        setStatus(false)
    }
    useEffect(() => {
        if (status) {
            console.log(supabase.auth.session()?.user)
        }
    })
    console.log('status', status)
    return (
        <div>
            {!supabase.auth.session()?.user ? <form className='login__enter'>
                    <div>
                        <MarketPlace/>
                    </div>
                    <h2>Login to Shop Bag</h2>
                    <label>
                        <input className='login-block__input' onChange={(evt) => setUserMail(evt.target.value)} type='text'
                               value={userMail} placeholder='Email' required={true}/>
                    </label>
                    <label>
                        <input className='login-block__input' onChange={(evt) => setUserPassword(evt.target.value)}
                               type='text'
                               value={userPassword} placeholder='Password' required={true}/>
                    </label>
                    <Link className='login__link' to={status ? '/' : '/login'} onClick={signIn}>Login</Link>
                </form> :
                <form className='login__exit'>
                    <MarketPlace/>
                    <h2>You can sign out:</h2>
                    <div className='login__logout'>
                        <button className='login__logout-btn' type='button' onClick={signOut}>Logout</button>
                        <Link className='login__logout-homepage' to={status ? '/' : '/login'}>To the Homepage!</Link>
                    </div>
                </form>
            }
        </div>
    )
}
// vit.lipin@gmail.com