import React, { ReactElement, useEffect, useState } from 'react'
import { cvData } from './data/cvData'
import Header from './components/Header/Header'
import Careers from './components/Careers/Careers'
import Profile from './components/Profile/Profile'
import Projects from './components/ProjectsHighlights/Projects'
import Educations from './components/Educations/Educations'
import Languages from './components/LanguagesBlock/Languages'
import TabContainer from './components/TabContainer'

type tabs = Array<{
  tabTitle: string
  tabContent: ReactElement
}>

function App() {
  const [dataTheme, setDataTheme] = useState(
    localStorage.getItem('data-theme') || 'light'
  )
  document.querySelector('html')?.setAttribute('data-theme', dataTheme)

  useEffect(() => {
    window.addEventListener('storage', () => {
      setDataTheme(localStorage.getItem('data-theme') || 'light')
      document.querySelector('html')?.setAttribute('data-theme', dataTheme)
    })
  })
  const tabs: tabs = [
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
    </div>
  )
}

export default App
