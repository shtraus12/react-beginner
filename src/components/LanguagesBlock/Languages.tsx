import React, { useEffect, useState } from 'react'
import { LanguagesData } from '../../models'

interface LangugaesProps {
  languages: LanguagesData
}

function Languages({ languages }: LangugaesProps) {
  const [dataTheme, setDataTheme] = useState(
    localStorage.getItem('data-theme') || 'light'
  )
  useEffect(() => {
    window.addEventListener('storage', () => {
      setDataTheme(localStorage.getItem('data-theme') || 'light')
    })
  })

  return (
    <div className="languages-block" data-theme={dataTheme}>
      <div className="block-header">Languages</div>
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
