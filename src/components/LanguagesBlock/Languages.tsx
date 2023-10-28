import React, { useEffect, useState } from 'react'
import { LanguagesData } from '../../models'

interface LanguagesProps {
  languages: LanguagesData
}

function Languages({ languages }: LanguagesProps) {
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
