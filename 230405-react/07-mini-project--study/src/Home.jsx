import Layout from './Layout'
import { useContext, useEffect, useState } from "react"
import { Context } from "./UserContext"
import Admin from './Admin'
import User from './User'

const Home = () => {
    // You have to use currentRole to get role of current user
    // role is specify below
    // admin role is 'admin'
    // user role is 'user'
    // 'other' is who didn't login.
    const { getUserRole } = useContext(Context);
    const [role, setRole] = useState();
    const initApp = () => {
        setRole(getUserRole);
    }
    // example of currentRole.
    // return type is always string.
    useEffect(initApp, [role]);
    // You have to add condition here according to role.
    if (role === 'admin') {
        return (
            <Layout>
                <Admin />
            </Layout>
        )
    }

    return (
        <Layout>
            <User />
        </Layout>
    )

}

export default Home

