import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      temperature : 30
      }
      this.tempchangeup = this.tempchangeup.bind(this)
      this.tempchangedown = this.tempchangedown.bind(this)
  }

  tempchangeup(){
    let oldtemp = this.state.temperature

    this.setState({
      temperature : oldtemp + 1
    })
  }
  tempchangedown(){
    let oldtempp = this.state.temperature

    this.setState({
      temperature : oldtempp - 1
    })
  }

  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature} />
        <Content temperature={this.state.temperature} />
        <Footer tempchangeupp={this.tempchangeup} tempchangedownn={this.tempchangedown} />
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {this.props.temperature}</p>
      </header>
    );
  }
}


class Content extends React.Component {
  // code here.
  // hint: how to create props in React class component?
  render() {
    return (
      <main>
        <Temperature temperature={this.props.temperature} />
      </main>
    );
  }
}

class Temperature extends React.Component {
  render() {
    return (
      <div id="temperature">
        <span>{this.props.temperature} Oc</span>
      </div>
    );
  }
}
class Footer extends React.Component {

 

  render() {
   
    //let temperature = this.props.temperature
    // let tempchangedown = this.props.temperature

    return (
      <footer>
        <button onClick={this.props.tempchangeupp}>Up</button>

        <button onClick={this.props.tempchangedownn}>Down</button>
         
      </footer>
    );
  }
}