import React, { ReactNode, useEffect, useState } from 'react'

interface TabContainerProps {
  tabs: Array<{
    tabTitle: string
    tabContent: ReactNode
  }>
}

function TabContainer({ tabs }: TabContainerProps) {
  const [currentTab, moveToTab] = React.useState(0)
  const tabNavigatorRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (tabNavigatorRef.current) {
        const scrollLeft = tabNavigatorRef.current.scrollLeft
        tabNavigatorRef.current.scrollLeft = scrollLeft + 100
        setTimeout(() => {
          if (tabNavigatorRef.current) {
            tabNavigatorRef.current.scrollLeft = scrollLeft - 100
          }
        }, 400)
      }
    }, 800)
  })

  const [dataTheme, setDataTheme] = useState(
    localStorage.getItem('data-theme') || 'light'
  )
  useEffect(() => {
    const updateTheme = () => {
      setDataTheme(localStorage.getItem('data-theme') || 'light')
    }
    window.addEventListener('storage', updateTheme)
    return () => {
      window.removeEventListener('storage', updateTheme)
    }
  }, [])

  return (
    <div className="tab-container" data-type={dataTheme}>
      <div className="tab-navigator" ref={tabNavigatorRef}>
        {tabs.map((tab, index) => {
          return (
            <div
              className={index === currentTab ? 'tab-active' : 'tab'}
              key={`tab${index}`}
              onClick={moveToTab.bind({}, index)}
            >
              {tab.tabTitle}
            </div>
          )
        })}
      </div>
      <div className="tab-content">{tabs[currentTab].tabContent}</div>
    </div>
  )
}

export default TabContainer
