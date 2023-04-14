import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react";
// import { useHistory } from "react-router-dom";

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

    // const history = useHistory();
    // const handleLogin = () => {
    //     // Call loginUser function from UserContext
    //     // and pass the username and password
    //     loginUser(username, password);

    //     // Redirect to admin page
    //     history.push("/admin");
    // };

    return (
        <Layout>
        <div class="login-ja">
            <div>
            <p style={{backgroundColor: "white"}}>Username</p>
            <input name="UserName" onChange={handleChangeUserName} placeholder='UserName' /> 
            <p style={{backgroundColor: "white"}}>Password</p>
            <input name="PassWord" onChange={handleChangePassword} placeholder='PassWord' /> 
            <button class="login-btn" onClick={() => login({ username: username, password: password })}>Login</button>
            </div>
        </div>
        </Layout>
    )
}

export default Login