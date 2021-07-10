import React, {useState} from 'react'
import {MarketPlace} from "./MarketPlace";
import {supabase} from "../../Admin/Admin";
import { Link } from "react-router-dom";

console.log(supabase.auth.session()?.user)
export const Login = () => {
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [status, setStatus] = useState(false)
    // vit.lipin@gmail.com
    const signIn = async () => {
        const { user, session, error } = await supabase.auth.signIn({
            email: userMail,
            password: userPassword,
        })
        console.log('session', session)
        error ? setStatus(false) : setStatus(true)
    }
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        setStatus(false)
    }
    return (
        <div>
            {!supabase.auth.session()?.user ? <form className='login'>
                <div>
                    <MarketPlace/>
                </div>
                <h2>Login to Shop Bag</h2>
                <div className='login-block'>
                    <label>
                        <input className='login-block__input' onChange={(evt) => setUserMail(evt.target.value)} type='text'
                               value={userMail} placeholder='Email' required={true}/>
                    </label>
                    <label>
                        <input className='login-block__input' onChange={(evt) => setUserPassword(evt.target.value)} type='text'
                               value={userPassword} placeholder='Password' required={true}/>
                    </label>
                </div>
                    <Link to={status? '/' : '/login'} onClick={signIn}>Login</Link>
            </form> :
                <div>
                <div>
                <MarketPlace/>
                </div>
                <button type='button' onClick={signOut}>Logout</button>
                    <Link to={!status? '/' : '/login'} >To the Homepage!</Link>
                </div>
            }
        </div>
    )
}
// vit.lipin@gmail.com