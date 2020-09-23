
import React from 'react';

function RegisterUserForm(props) {

    let {first_name, last_name, age, password, username} = props.newUser
    return (
        <>
        <form onSubmit={props.onSubmit}>
            <label className="register-form">
                First Name
                <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={props.onChange}
                    error = {props.error.first_name}
                />
                Last Name
                <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={props.onChange}
                    error = {props.error.last_name}
                />

                Age  
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={props.onChange}
                    error = {props.error.age}
                    
                />
                Password
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={props.onChange}
                    error = {props.error.password}
                />
                Username
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={props.onChange}
                    error = {props.error.password}
                />
                    
                {props.error.first_name && 
                    <div>
                        {props.error.first_name}    
                    </div>
                }

                {props.error.last_name && 
                    <div>
                        {props.error.last_name}    
                    </div>
                }

                {props.error.age && 
                        <div>
                            {props.error.age}    
                        </div>
                    }

                {props.error.password && 
                    <div>
                        {props.error.password}    
                    </div>
                }

                {props.error.username && 
                        <div>
                            {props.error.username}    
                        </div>
                    }
            </label>
            <input type="submit" value="submit" className="btn" />
        </form>
       </>

    )
}

export default RegisterUserForm;
