import { SyntheticEvent, useEffect, useState } from 'react'
import { HeaderData } from '../../models'
import { SyntheticEventData } from 'react-dom/test-utils'

interface HeaderProps {
  headerData: HeaderData
}

function Header(this: any, { headerData }: HeaderProps) {
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

  function themeChangeHandler(arg: SyntheticEvent) {
    const newTheme = (arg.target as HTMLInputElement).checked ? 'dark' : 'light'
    localStorage.setItem('data-theme', newTheme)
    setDataTheme(newTheme)
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="header" data-theme={dataTheme}>
      <div className="person">
        <img src={headerData.avatarPath} alt="avatar" />
        <div className="name-position">
          <div className="name">{headerData.fullName}</div>
          <div className="position">{headerData.position}</div>
          <input
            id="toggle"
            type="checkbox"
            className="checkbox"
            checked={dataTheme === 'dark' ? true : false}
            onClick={themeChangeHandler}
          />
          <label htmlFor="toggle" className="switch"></label>
        </div>
      </div>
      <div className="contact-information">
        {headerData.contactInformation.map((contact, index) => {
          return (
            <div className="contact" key={`contact ${index}`}>
              {contact.iconPath && <img src={contact.iconPath} alt="" />}
              <div>
                {`${contact.title}: `}
                {contact.bodyLink ? (
                  <a href={contact.bodyLink}>{contact.body}</a>
                ) : (
                  contact.body
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Header
