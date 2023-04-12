import './assets/style/index.css'

const Navbar = () => {
    return (
        <div class="navbar">
        <ul>
           <li><a href={'/'}>Main</a></li>
            <li><a href={'/login'}>Login</a></li>
            <li><a href={'/signup'}>Signup</a></li>
        </ul>
        
        <hr />
        </div>
       
    )
}

export default Navbar