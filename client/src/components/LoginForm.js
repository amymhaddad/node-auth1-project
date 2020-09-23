import React from 'react';


function LoginForm(props) {

    const {username, password } = props.userCredentials
    return (
        <>
        <form onSubmit={props.onLogin}>
            <label className="register-form">
                Username
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={props.onChange}
                    error = {props.error.username}
                />
        
                Password
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={props.onChange}
                    error = {props.error.password}
                />
                </label>

                {props.error.username && (
                    <div>
                        {props.error.username}
                    </div>
                )}

                {props.error.password && (
                    <div>
                        {props.error.password}
                    </div>
                )}
                <input type="submit" value="submit" className="btn" />
            </form >
        </>

    )
}

export default LoginForm;