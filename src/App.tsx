import React, { ReactElement, useState } from 'react'
import { cvData } from './data/cvData'
import Header from './components/Header/Header'
import Careers from './components/Careers/Careers'
import Profile from './components/Profile/Profile'
import Projects from './components/ProjectsHighlights/Projects'
import Educations from './components/Educations/Educations'
import Languages from './components/LanguagesBlock/Languages'
import TabContainer from './components/TabContainer'
import { type } from 'os'
import ModalWindow from './components/ModalWindow/ModalWindow'
import InfoModalWindow from './components/ModalWindow/InfoModalWindow/InfoModalWindow'

type tabs = Array<{
  tabTitle: string
  tabContent: ReactElement
}>

function App() {
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

  const [modal, setModal] = useState(false)

  function changeModalVisibility() {
    setModal(!modal)
  }

  return (
    <div className="container">
      <Header
        headerData={cvData.headerData}
        nameOnClickFunction={changeModalVisibility}
      />
      <hr />
      <TabContainer tabs={tabs} />

      {modal && (
        <InfoModalWindow
          onSubmit={changeModalVisibility}
          headerText="Header"
          body="qweqwe"
        />
      )}
    </div>
  )
}

export default App
