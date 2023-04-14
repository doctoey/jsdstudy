import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext } from "react"
import { useState } from "react";

const Signup = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    const [organization, setOrganization] = useState();

    const handleChangeUserName = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeFullname = (event) => {
        setFullname(event.target.value);
    };
    const handleChangeOrganization = (event) => {
        setOrganization(event.target.value);
    };

    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>

    return (
        <Layout>
            <div>
            <div>
            <p style={{backgroundColor: "white"}}>Username</p>
            <input name="UserName" onChange={handleChangeUserName} placeholder='username' /> 
            <p style={{backgroundColor: "white"}}>Password</p>
            <input name="PassWord" onChange={handleChangePassword} placeholder='password' /> 

            <p>fullname</p>
            <input name="fullname" onChange={handleChangeUserName} placeholder='fullname' /> 
            <p>organization</p>
            <input name="organization" onChange={handleChangePassword} placeholder='organization' /> 

            <button class="login-btn" onClick={() => signup({ username: username, password: password,organization:organization,fullname:fullname  })}>Login</button>
            </div>
            </div>
        </Layout>
    )
}

export default Signup