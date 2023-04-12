import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react";

const Login = () => {
    // You have to pass data to signup() function to successful login.

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleChangeUserName = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>

    return (
        <Layout>
        <div class="login-ja">
            <div>
            <p style={{backgroundColor: "white"}}>Username</p>
            <input name="UserName" onChange={handleChangeUserName} placeholder='username' /> 
            <p style={{backgroundColor: "white"}}>Password</p>
            <input name="PassWord" onChange={handleChangePassword} placeholder='username' /> 
            <button class="login-btn" onClick={() => login({ username: username, password: password })}>Login</button>
            </div>
        </div>
        </Layout>
    )
}

export default Login