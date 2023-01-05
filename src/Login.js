import React from 'react';
import { useDispatch } from 'react-redux';
import {login} from './Features/User';
import {logout} from './Features/User';


const Login = () => {
    const dispatch= useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(login(
        {name:'Maha', age:23, email:'emahe1208@gmail.com'}
      ))}>Login</button>
        
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login
