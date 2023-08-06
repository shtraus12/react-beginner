import React from 'react'
import { EducationsData } from '../../models'

interface EducationsProps {
  educations: EducationsData
}

function Educations({ educations }: EducationsProps) {
  return (
    <div className="educations-block">
      {educations.map((education, index) => {
        return (
          <div className="education-block" key={index}>
            <div className="dates">{education.dates}</div>
            <div className="rest">
              <div className="school-name">{education.schoolName}</div>
              <div className="description">{education.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Educations
