import React from 'react'
import logo from './logo.svg'
import { cvData } from './data/cvData'
import Header from './components/Header'
import Careers from './components/Careers'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Educations from './components/Educations'
import Languages from './components/Languages'
import TabContainer from './components/TabContainer'

function App() {
  const tabs = [
    {
      tabTitle: 'Profile',
      tabContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Profile profile={cvData.profile} />
          <hr />
          <Languages languages={cvData.languages} />
        </div>
      ),
    },
    {
      tabTitle: 'Career summary',
      tabContent: <Careers careers={cvData.careers} />,
    },
    {
      tabTitle: 'Projects highlights',
      tabContent: <Projects projects={cvData.projectsHighlights} />,
    },
    {
      tabTitle: 'Educations',
      tabContent: <Educations educations={cvData.educations} />,
    },
  ]

  return (
    <div className="container">
      <Header headerData={cvData.headerData} />
      <hr />
      <TabContainer tabs={tabs} />

      {/* <Profile profile={cvData.profile} />
      <hr />
      <Careers careers={cvData.careers} />
      <hr />
      <Projects projects={cvData.projectsHighlights} />
      <hr />
      <Educations educations={cvData.educations} />
      <hr />
      <Languages languages={cvData.languages} /> */}
    </div>
  )
}

export default App
