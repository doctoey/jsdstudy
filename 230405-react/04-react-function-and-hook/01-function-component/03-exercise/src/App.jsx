import React from 'react';

function App() {
    return (
        <div id="app">
            <img src="https://pbs.twimg.com/media/FtUr18yagAAVhR0?format=jpg&name=medium" height="250" />
            <Info />
            <Social />
        </div>
    )
}

function Info() {
    const user = {
        firstName:"toey",
        lastName:"kung",
        img:"https://pbs.twimg.com/media/FtTtmlmagAA-Xdy?format=jpg&name=large",
        haha:"araiwa"
      }
    
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>bio = {user.haha}</p>
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