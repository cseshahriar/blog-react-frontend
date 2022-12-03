import React, {useState, useEffect} from "react";
import APIService from "../APIService";
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useCookies(['mytoken']);
    const [isLogin, setLogin] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(token['mytoken']) {
            navigate('/articles')
        }
    }, [token]) // one time

    const loginAction = () => {
        APIService.LoginUser({username, password})
            .then(response => setToken('mytoken', response.token))
            .catch(error => console.log(error));
    }

    const registerAction = () => {
        APIService.RegisterUser({username, password})
            .then(() => loginAction())
            .catch(error => console.log(error));
    }

    return(
        <div className="App">
            { isLogin ? <h1 className="mt-3 mb-3">Please Login</h1>: <h1>Please Register</h1>}

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text" className="form-control" id="username" placeholder="Please Enter Username"
                    value={username} onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password" className="form-control" id="password" placeholder="Please Enter Password"
                    value={password} onChange={e => setPassword(e.target.value)}
                />
            </div>

            {
                isLogin ? <button onClick={loginAction} className="btn btn-primary">Login</button> :
                    <button onClick={registerAction} className="btn btn-primary">Register</button>
            }

            <div className="mb-3">
                {
                    isLogin ? <h5>If You Don't Have Account, Please <button className="btn btn-primary" onClick = {() => setLogin(false)} >Register</button>Here</h5>
                    :  <h5>If You Have Account, Please <button className = "btn btn-primary" onClick = {() => setLogin(true)} >Login</button>Here</h5>
                }
            </div>

        </div>
    )
}

export default Login;