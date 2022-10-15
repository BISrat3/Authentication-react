import React,{useState, useEffect, useReducer} from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT')
    {
        return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === "INPUT_BLUR"){
        return { value : state.value, isValid: state.value.includes('@')}
    }
    return {value : '', isValid:false}
}

const passwordReducer = (state, action) =>{
    if(action.type === 'USER_INPUT')
    {
        return { value: action.val, isValid: action.val.trim().length >6 }
    }
    if (action.type === "INPUT_BLUR"){
        return { value : state.value, isValid: state.value.trim().length >6}
    }
    return {value : '', isValid:false}
}

export default function Login(props) {
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] =useState();
    const [formIsValid, setFormIsValid] = useState(false);


    const [passwordState, dispatchPassword] = useReducer
       ( passwordReducer, {
        value :'',
        isValid: undefined,
       });

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value :'',
        isValid: undefined,
    })

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
        // setEnteredEmail(event.target.value);
        dispatchEmail({
            type: 'USER_INPUT', 
            val: event.target.value
        })

        setFormIsValid(
           event.target.value.includes('@') && passwordState.isValid
        )
    }

    const passwordChangeHandler = (event) => {
        // setEnteredPassword (event.target.value)
        dispatchPassword({type: 'USER_INPUT', val: event.target.value})

        setFormIsValid(
            emailState.isValid && event.target.value.trim().length >6)
    }

    const validateEmailHandler = () =>{
        // setEmailIsValid (emailState.value.includes('@')) or
        // setEmailIsValid (emailState.isValid) or
        dispatchEmail({type: 'INPUT_BLUR'})
    }

    const validatePasswordHandler = () =>{
        dispatchPassword({type : 'INPUT_BLUR'})
        // setPasswordIsValid (enteredPassword.trim().length >6)
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value)
    }

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <div className={`${classes.control} ${
                emailState.isValid === false ? classes.invalid: ''
            }`}>
                <label htmlFor='email'>E-Mail</label>
                <input 
                    type="email"
                    id="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    />
            </div>
            <div
                className={`${classes.control} ${
                    passwordState.isValid === false ? classes.invalid: ''
                }`}>
                <label htmlFor='password'>Password</label>
                <input 
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    />
            </div>
            <div className={classes.actions}>
                <Button type="submit" className={classes.btn} disabled={!formIsValid}> 
                    Login
                </Button>
            </div>
        </form>
    </Card>
  )
}
