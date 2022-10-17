import React, {useContext}from 'react'

import AuthContext from '../../store/auth-context'
import classes from'./Navigation.module.css'

export default function Navigation() {
   const ctx = useContext(AuthContext)

  return (
    // <AuthContext.Consumer>
    // {(ctx) =>{
        // return ( ) 
    // }
    // )}
    // </AuthContext.Consumer>
    <nav>
        <ul>
            {ctx.isLoggedIn && (
                <li>
                    <a href='/'>Users</a>
                </li>
            )}
            {ctx.isLoggedIn && (
                <li>
                    <a href='/'>
                        Admin
                    </a>
                </li>
            )}
            {ctx.isLoggedIn && (
                <li>
                    <button onClick={ctx.onLogout}>
                        Logout
                    </button>
                </li>
            )}
        </ul>
    </nav>
  )
}
