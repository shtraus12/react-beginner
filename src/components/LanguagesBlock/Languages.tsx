import React from 'react'
import { LanguagesData } from '../../models'

interface LangugaesProps {
  languages: LanguagesData
}

function Languages({ languages }: LangugaesProps) {
  return (
    <div className="languages-block">
      <div className="block-header">Langagues</div>
      <div className="block-body">
        {languages.map((language, index) => {
          return (
            <div className="language-block" key={index}>
              <div className="language-name">{language.languageName}</div>
              <div className="language-level">{language.level}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Languages
