
import React, { useState} from 'react';
import axios from 'axios';
import RegisterUserForm from "./RegisterUserForm"
// import postApiRegister from "../helpers/RegisterHelper"
import { useHistory } from "react-router-dom";
import Header from "../common/Header"
import { toast } from "react-toastify"

function Register(props) {
    const history = useHistory();
    const [newUser, addNewUser] = useState({
        first_name: "", 
        last_name: "", 
        age:"", 
        password:"",
        username: ""
    })

    const [errors, setError] = useState({})
    const [cookie, setCookie] = useState(0)

    function handleChange(event) {
        const addUser = {...newUser, [event.target.name]: event.target.value}
        addNewUser(addUser)
    }

    function clearData() {
        addNewUser(
            {
                first_name: "", 
                last_name: "", 
                age:"", 
                password:"",
                username: ""
            }
        )
    }

    function formIsValid() {
        const _errors = {}
        if (!newUser.first_name) _errors.first_name = "First name is required"
        if (!newUser.last_name) _errors.last_name = "Last name is required"
        if (!newUser.age) _errors.age = "Age is required"
        if (!newUser.password) _errors.password = "Password is required"
        if (!newUser.username) _errors.username = "Username is required"

        setError(_errors)
        return Object.keys(_errors).length === 0;
    }

    function handleSuccessfulRegistration(userId) {
        setCookie(userId)
        history.push({
            pathname: '/welcome',
            state: { cookie: userId}
          })
        toast.success("Successful registration ")    
    } 

    function handleUnsuccessfulRegistration(error) {
        const status_code = error.response.status
        const message = error.response.data["error"]
        let status = {
            status: status_code,
            message: message
        }
        clearData()
        return setError(status)
    }

    function handleSumbit(event) {
        event.preventDefault();
        if (!formIsValid()) return 
        
        // postApiRegister(addNewUser)
        let url = "http://localhost:3000/api/register"
        axios({
            method: "post",
            url: url,
            data: newUser,
            headers: {
               'Content-Type': 'application/json'
            }
           })
           .then(function(response) {
               if (response.status === 201)  handleSuccessfulRegistration(response.data.userId)
           })
           .catch(error => handleUnsuccessfulRegistration(error))
    }

    return (
        <>
            <Header />
            <RegisterUserForm 
                newUser = {newUser}
                onChange = {handleChange}
                onSubmit = {handleSumbit}
                error = {errors}
            />

            {errors && (
                <div>
                    {errors.message}
                </div>
            )}
       </>

    )
}

export default Register;
