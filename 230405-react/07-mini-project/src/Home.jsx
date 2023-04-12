import Layout from './Layout'
import { useContext, useEffect, useState } from "react"
import { Context } from "./UserContext"
import Admin from './Admin'
import User from './User'



const Home = () => {
    // You have to use getUserRole() to get role of current user
    // role is specify below
    // admin role is 'admin'
    // user role is 'user'
    // 'other' is who didn't login.
    const { getUserRole } = useContext(Context)
    // example of getUserRole.
    // return type is always string.
    
    const [role, setRole] = useState()
    // const [data, setData] = useState()
    // let prevdata = data
    
    const IniApp = () => {
        const _role = getUserRole()
        setRole(_role);
        // setRole(prevdata++);
    }

    useEffect(IniApp, [])



    





////////////////////////////////////////////////////////////

//     const { getUserRole, getCurrent } = useContext(Context);
//   // example of getUserRole.
//   // const _role = getUserRole()
//   // return type is always string.
//   const [role, setRole] = useState();

//   const InitApp = () => {
//     console.log("initApp");
//     setRole(getUserRole());
//     console.log("getUserCurrent", getCurrent());
//   };

//  const { getUserRole, getCurrent } = useContext(Context);
//   // example of getUserRole.
//   // const _role = getUserRole()
//   // return type is always string.
//   const [role, setRole] = useState();

//   const InitApp = () => {
//     console.log("initApp");
//     setRole(getUserRole());
//     console.log("getUserCurrent", getCurrent());
//   };

//   useEffect(InitApp, [getCurrent]);


////////////////////////////////////////////////////////////









    // You have to add condition here according to role.
    // if (role === 'admin') {
        return (
            <Layout>
                <Admin />
            </Layout>
        )
    // }

    return (
        <Layout>
            <User />
        </Layout>
    )

}

export default Home

