import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

export default function MainHeader(props) {
  return (
    <header className={classes ['main-header']}>
        <h1>A Typical Page</h1>
        {/* <Navigation  onLogout= {props.onLogout} /> */}
        {/* we can use either of hte method */}
        <Navigation/>
    </header>
  )
}
