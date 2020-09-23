
import React, { useState } from 'react';
import axios from 'axios';
import Header from "../common/Header"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"

function Login () {
    const history = useHistory();
    const [user, loginUser] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const [cookie, setCookie] = useState(0)

    function handleChange(event) {
        const newUserCredentials = {...user, [event.target.name]: event.target.value}
        loginUser(newUserCredentials)
    }

    function isValid() {
        const _errors = {}
        if (!user.username) _errors.username = "You must enter a username"
        if (!user.password) _errors.password = "You must enter a password"

        setErrors(_errors)
        return Object.keys(_errors).length === 0
    }

    function handleSuccessfulLogin(userId) {
        setCookie(userId)
        history.push({
            pathname: '/welcome',
            state: { cookie: userId }
            })
        toast.success("Login successful")               
    }

    function handleUnsuccessfulLogin(error) {
        const message = error.response.data.error 
        const status = error.response.status
        return setErrors({
            message: message, 
            status: status
        })
    }

    function handleLogin(event) {
        event.preventDefault();

        if (!isValid()) return; 
        let url = "http://localhost:3000/api/login"
        axios({
            method: "post",
            url: url,
            data: user,
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
           })
        .then((response) => {
            if (response.status === 201) return handleSuccessfulLogin(response.data.userId)
        })
        .catch(error => handleUnsuccessfulLogin(error))
    }

    return ( 
        <>
            <Header />
            <LoginForm 
                userCredentials = {user}
                onChange = {handleChange}
                onLogin = {handleLogin}
                error = {errors}
            />

            {errors && (
                <div>
                    {errors.message}
                    {" "}
                    {" "}
                    {errors.status}
                </div>
            )}  
    
        </>

    )
}


export default Login;