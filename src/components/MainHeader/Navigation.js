import React from 'react'

export default function Navigation() {
  return (
    <nav>
        <ul>
            {props.isLoggedIn && (
                <li>
                    <a href='/'>Users</a>
                </li>
            )}
            {props.isLoggedIn && (
                <li>
                    <a href='/'>
                        Admin
                    </a>
                </li>
            )}
            {props.isLoggedIn && (
                <li>
                    <button onClick={props.onLogout}>
                        Logout
                    </button>
                </li>
            )}
        </ul>
    </nav>
  )
}
