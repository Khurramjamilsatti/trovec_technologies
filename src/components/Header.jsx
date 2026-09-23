import { useEffect, useState } from 'react'
import { useContent } from '../hooks/useContent'

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 14.3A8.4 8.4 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (theme === 'light') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.25" />
    </svg>
  )
}

export default function Header() {
  const { lang, setLang, site, theme, cycleTheme } = useContent()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const primary = site.navPrimary || site.nav.slice(0, 4)
  const themeCopy = site.theme || { light: 'Light', dark: 'Dark', system: 'System', themeAria: 'Toggle color theme' }
  const themeLabel =
    theme === 'light' ? themeCopy.light : theme === 'dark' ? themeCopy.dark : themeCopy.system

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap topnav">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
          {site.brand}
          <sup>™</sup>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {primary.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={`${themeCopy.themeAria}: ${themeLabel}`}
            title={themeLabel}
          >
            <ThemeIcon theme={theme} />
            <span className="theme-toggle-label">{themeLabel}</span>
          </button>
          <select
            className="langtoggle"
            aria-label="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {site.languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
          <a href={site.cta.href} className="cta">
            {site.cta.label}
          </a>
          <button
            type="button"
            className={`menu-btn${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-drawer${open ? ' open' : ''}`} hidden={!open}>
        <nav aria-label="All sections">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={site.cta.href} className="cta" onClick={() => setOpen(false)}>
            {site.cta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
