import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import HelloMessage from './components/HelloMessage';
import Timer from './components/Timer';
import TodoApp from './components/TodoApp';
import MarkdownEditor from './components/MarkdownEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloooad.
        </p>
        <HelloMessage name="gf" />
        <Footer />
        <Timer />
        <TodoApp />
        <MarkdownEditor />
      </div>
    );
  }
}

export default App;
