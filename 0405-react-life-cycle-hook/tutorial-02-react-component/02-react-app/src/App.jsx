import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      temperature : 30
    }
  }

  render() {
    let temperature = 30
    return (
      <div id="app">
        <button onClick={() => { 
          let previous_temp = this.state.temperature;
          previous_temp += 1
          this.setState(
          {
            temperature : previous_temp
          }
        ) }}>Increase temp</button>

        <button onClick={() => { 
          let previous_temp = this.state.temperature;
          previous_temp -= 1
          this.setState(
          {
            temperature : previous_temp
          }
        ) }}>Decrease temp</button>
        
        <Header temperature={this.state.temperature} />
        <Content />
        <Footer />
        <Challenge />
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  render() {
    return (
      // Code here
      // <Header />
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {this.props.temperature}</p>
       </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      // Code here
      // <Content />
      <main>
        <Temperature />
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    const temperature = 1112
    return (
      // Code here
      // <Temperature />
      <div id="temperature">
        <span>{temperature} Oc</span>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      // Code here
      // <Footer />
      <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
    );
  }
}
class Challenge extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        // Code here
        <div>
        <div>
          <h2>Challenge</h2>
        </div>
      </div>
      );
    }

}



export default App;