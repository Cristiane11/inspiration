import React, { Component } from 'react';
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <h1 className="logo">Cristiane Abreu</h1> 
      </header>
      <MainContent/>
      <Footer/>
      
    </div>
  );
}
}
export default App;
