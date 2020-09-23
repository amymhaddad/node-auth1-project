
import {getUsers} from "../services/GetUsers"
import React, { useState, useEffect} from 'react';
import DisplayUsers from "./DisplayUsers"
import { Link } from "react-router-dom"; 

function Users(props) {
    const userId = props.userId
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState({})

    function handleUserError(error) {
        const message = error.response.data.error
        const status = error.response.status
        const error_status = {
            message: message, 
            status: status
        }
        setErrors(error_status)

    }
    
    useEffect(() => {
        getUsers(userId)
        .then((eachUser) => setUsers(eachUser))
        .catch((error) => {
            handleUserError(error)
        })

    }, [userId])


    return (
        <>
        {users.map((user) => (
            <DisplayUsers 
                key = {user.id}
                firstname = {user.first_name}
                lastname = {user.last_name}
            />
            ))}

        {errors &&  (
            <div>
                Error: {errors.status}
                {" "}
                {errors.message}  {" "}
                {" "}
                <Link to="/login">Login</Link>
            </div>
        )}

        </>
    )
}

export default Users;