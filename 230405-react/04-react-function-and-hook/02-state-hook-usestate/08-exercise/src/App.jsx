import React, { useState } from 'react';

function App() {
    return (
        <div id="app">
            <img src="https://pbs.twimg.com/media/FtUr18yagAAVhR0?format=jpg&name=medium" height="250" /> <br/><br/>
            <Info />
            <Social />
        </div>
    )
}

function Info() {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const user = {
        firstName:"toey",
        lastName:"kung",
        img:"https://pbs.twimg.com/media/FtTtmlmagAA-Xdy?format=jpg&name=large",
        haha:"araiwa"
      }
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeBio = (event) => {
        setBio(event.target.value);
    };

    return (
        <div>
            <input name="firstName" onChange={handleChangeName} placeholder='name' /> 
            <p>First Name:{name}</p>
            <input name="bio" onChange={handleChangeBio} placeholder='bio'/>
            <p>bio:{bio}</p>
        </div>
    )
}

function Social() {
    return (
        <div>
            <a href="https://www.facebook.com/">FaceBook</a><br/>
            <a href="https://twitter.com/home">Twitter</a>
        </div>
    )
}

export default App;