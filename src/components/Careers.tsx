import React from 'react'
import { ICVData } from '../models'
import TextBlock from './TextBlock'

interface Props {
  cvData: ICVData
}

function Careers({ cvData }: Props) {
  return (
    <div className="career-block">
      {cvData.careers.map((career) => {
        return (
          <div className="work-experience">
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
                <TextBlock paragraphs={career.description} />
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
