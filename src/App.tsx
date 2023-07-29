import React from 'react'
import logo from './logo.svg'
import { cvData } from './data/cvData'
import Header from './components/Header'
import Careers from './components/Careers'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Educations from './components/Educations'
import Languages from './components/Languages'

function App() {
  return (
    <div className="container">
      <Header headerData={cvData.headerData} />
      <hr />
      <Profile profile={cvData.profile} />
      <hr />
      <Careers careers={cvData.careers} />
      <hr />
      <Projects projects={cvData.projectsHighlights} />
      <hr />
      <Educations educations={cvData.educations} />
      <hr />
      <Languages languages={cvData.languages} />
    </div>
  )
}

export default App
