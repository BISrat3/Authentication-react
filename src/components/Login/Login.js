import React,{useState, useEffect, useReducer, useContext, useRef} from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'
import Input from '../UI/Input/Input'

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

    const authCtx = useContext (AuthContext)


    const [passwordState, dispatchPassword] = useReducer
       ( passwordReducer, {
        value :'',
        isValid: null,
       });

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value :'',
        isValid: undefined,
    })

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect (() => {
        console.log("Effect Running")

         return () =>{
            console.log("Effect Cleanup")
         }
    }, [])

    const {isValid : emailIsValid} = emailState;
    const {isValid: passwordIsValid } = passwordState
    // to handle side effect - are http request. 
    // useEffects are executed in response to something, it could be loading anything that is related to action. 
    useEffect(()=>{
        const identifier = setTimeout(() =>{
        console.log("Checking form validity!")
        setFormIsValid(
            emailIsValid && passwordIsValid)
        }, 500);
        

        return () =>{
            console.log("Running Clean up")
            clearTimeout(identifier)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) =>{
        // setEnteredEmail(event.target.value);
        dispatchEmail({
            type: 'USER_INPUT', 
            val: event.target.value
        })

        // setFormIsValid(
        //    event.target.value.includes('@') && passwordState.isValid
        // )
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
        // setPasswordIsValid (enteredPassword.trim().length >6)
        dispatchPassword({type : 'INPUT_BLUR'})
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if (formIsValid){
            authCtx.onLogin(emailState.value, passwordState.value)
        }
        else if (!emailIsValid){
            emailInputRef.current.focus();
        }
        else{
            passwordInputRef.current.focus();
        }
    }

  return (
    <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <Input 
                ref= {emailInputRef}
                id='email' 
                label='E-Mail' 
                type='email' 
                isValid={emailIsValid} 
                value={emailState.value}
                onBlur={validateEmailHandler}
                onChange={emailChangeHandler}
            />
            <Input 
                ref= {passwordInputRef}
                id='password' 
                label='Password' 
                type='password' 
                isValid={passwordIsValid} 
                value={passwordState.value}
                onBlur={validatePasswordHandler}
                onChange={passwordChangeHandler}
            />
            {/* <div
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
            </div> */}
            <div className={classes.actions}>
                {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}>  */}
                <Button type="submit" className={classes.btn}>
                    Login
                </Button>
            </div>
        </form>
    </Card>
  )
}
