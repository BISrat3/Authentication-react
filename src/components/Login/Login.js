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

    useEffect (() => {
        console.log("Effect Running")

         return () =>{
            console.log("Effect Cleanup")
         }
    }, [])

    // to handle side effect - are http request. 
    // useEffects are executed in response to something, it could be loading anything that is related to action. 
    // useEffect(()=>{
    //     const identifier = setTimeout(() =>{
    //     console.log("Checking form validity!")
    //     setFormIsValid(
    //         enteredEmail.includes('@') && enteredPassword.trim().length >6)
    //     }, 500);
        

    //     return () =>{
    //         console.log("Running Clean up")
    //         clearTimeout(identifier)
    //     }
    // }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value);

        setFormIsValid(
           event.target.value.includes('@') && enteredPassword.trim().length >6
        )
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword (event.target.value)

        setFormIsValid(
        enteredEmail.includes('@') && event.target.value.trim().length >6)
    }

    const validateEmailHandler = () =>{
        setEmailIsValid (enteredEmail.includes('@'))
    }

    const validatePasswordHandler = () =>{
        setPasswordIsValid (enteredPassword.trim().length >6)
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword)
    }

  return (
    <div>Login</div>
  )
}
