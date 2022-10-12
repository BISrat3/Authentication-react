import React,{useState} from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

export default function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] =useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value);

        setFormIsValid(

        )
    }
  return (
    <div>Login</div>
  )
}
