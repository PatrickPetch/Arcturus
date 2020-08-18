import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import News from './components/News/News'
import Team from './components/Team/Team'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar id="NavBar"/>
      <Intro id="home"/>
      <News />
      <Team />
    </div>
  );
}

export default App;
