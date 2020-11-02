import React from 'react';
import './App.css';

import Experience from './Experience/experience'
import Education from './Education/education'
import Skills from './Skills/skills'
import Biography from './Biography'

class App extends React.Component {
  render(){
    return (
      <div className='appContainer'>
        <Biography />
        <Education />
        <Experience />
        <Skills />
      </div>
    )
  }
}

export default App;
