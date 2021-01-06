import React, { useState } from 'react'
import { login } from "../store/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/auth/selectors";
import { Redirect } from "react-router-dom"

export default function () {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const dispatch = useDispatch()
    const tokenAvailable = useSelector(selectToken);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Login with:", email, password)
        dispatch(login(email, password))
        setEmail("")
        setPassword("")

        if (tokenAvailable) {
            return <Redirect to="/order"></Redirect>;
          }
    
    }

    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Email:
                        {" "}<input 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        >
                        </input>
                    </label>
                </p>
                <p>
                    <label>
                        Password:
                        {" "}<input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        >
                        </input>
                    </label>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
