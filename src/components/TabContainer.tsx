import React, { ReactNode } from 'react'

interface props {
  tabs: Array<{
    tabTitle: string
    tabContent: ReactNode
  }>
}

function TabContainer({ tabs }: props) {
  const [currentTab, moveToTab] = React.useState(0)
  const tabNavigatorRef = React.useRef<HTMLDivElement>(null)

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

  return (
    <div className="tab-container">
      <div className="tab-navigator" ref={tabNavigatorRef}>
        {tabs.map((tab, index) => {
          return (
            <div
              className={index === currentTab ? 'tab-active' : 'tab'}
              key={index}
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
