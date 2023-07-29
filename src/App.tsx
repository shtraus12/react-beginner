import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Careers from './components/Careers'
import { cvData } from './data/cvData'
import Profile from './components/Profile'
import Projects from './components/Projects'

function App() {
  return (
    <div className="container">
      <Header cvData={cvData} />
      <hr />
      <Profile cvData={cvData} />
      <hr />
      <Careers cvData={cvData} />
      <hr />
      <Projects cvData={cvData} />
    </div>
  )
}

export default App
