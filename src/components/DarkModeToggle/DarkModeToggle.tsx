import { ReactNode, SyntheticEvent, useEffect, useState } from 'react'

interface DarkModeToggle {}

function ToggleSwitch() {
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
    <div className="toggle-switch">
      <label className="label">
        <input
          type="checkbox"
          onClick={themeChangeHandler}
          checked={dataTheme === 'dark' ? true : false}
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
