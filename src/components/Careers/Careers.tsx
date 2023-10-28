import React, { useEffect, useState } from 'react'
import { CareersData } from '../../models'
import TextBlock from '../TextBlock'

interface CareersProps {
  careers: CareersData
}

function Careers({ careers }: CareersProps) {
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
    <div className="career-block" data-theme={dataTheme}>
      {careers.map((career, index) => {
        return (
          <div className="work-experience" key={`work-experience-${index}`}>
            <div className="rest">
              <div className="general">
                <div className="position-dates">
                  <div className="position">{career.position}</div>
                  <div className="dates-duration">
                    {career.dates}
                    <br />
                    {career.duration}
                  </div>
                </div>
                <div className="on-site-remote-company-name">
                  <div className="on-site-remote">{career.onSiteRemote}</div>
                  <div className="company-name">{career.companyName}</div>
                </div>
              </div>
              <div className="description">
                <TextBlock body={career.description} />
              </div>
            </div>
            <div className="timeline">
              <img src="././assets/ellipse.svg" />
              <div className="vl"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Careers
