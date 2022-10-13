import React,{useState, useEffect} from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

export default function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] =useState();
    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(()=>{
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length >6)
    },[ enteredEmail, enteredPassword])

    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword (event.target.value)
    }

    const validateEmailHandler = () =>{
        setFormIsValid (enteredEmail.includes('@'))
    }
  return (
    <div>Login</div>
  )
}
