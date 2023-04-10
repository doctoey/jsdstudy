import React from 'react';

function App() {
    return (
        <div id="app">
        <h1>Table Example</h1>
            <Form />
            <Name />
        </div>
    )
}

function Form() {
    
    return (
        <div>
        <form action="">
            <input type="text" placeholder="Type new name here"/> 
            <input type="text" placeholder="Type new organization here"/> 
            <input type="text" placeholder="Type new position here"/>
            <button>Save</button>
        </form>
        </div>
    )
}

function Name() {

    const namePo = [
        { name: 'John', organ: 'ABC Inc.' , position:'Developer' },
        { name: 'Jane', organ: 'XYZ Corp.' , position:'Designer' },
        { name: 'Bob', organ: '123 LLC' , position:'Manager' },
       
      ];

    return (
<div>
    <table>
  <tr>
    <th>Name</th>
    <th>Organization</th>
    <th>Position</th>
  </tr>
  <tr>
    <td>John</td>
    <td>ABC Inc.</td>
    <td>Developer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>XYZ Corp.</td>
    <td>Designer</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>123 LLC</td>
    <td>Manager</td>
  </tr>
    </table>
</div>
    )
}

export default App;