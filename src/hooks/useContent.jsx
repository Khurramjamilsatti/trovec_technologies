import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from '../../data/locales/en.json'
import ar from '../../data/locales/ar.json'
import ur from '../../data/locales/ur.json'

const locales = { en, ar, ur }
const SUPPORTED = new Set(['en', 'ar', 'ur'])
const RTL = new Set(['ar', 'ur'])

const ContentContext = createContext(null)

function getStored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function normalizeLang(value) {
  return SUPPORTED.has(value) ? value : 'en'
}

export function ContentProvider({ children }) {
  const [lang, setLangState] = useState(() => normalizeLang(getStored('trovec-lang', 'en')))
  const [theme, setThemeState] = useState(() => getStored('trovec-theme', 'system'))

  const setLang = useCallback((next) => {
    const resolved = normalizeLang(next)
    setLangState(resolved)
    try {
      localStorage.setItem('trovec-lang', resolved)
    } catch {
      /* ignore */
    }
  }, [])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    try {
      localStorage.setItem('trovec-theme', next)
    } catch {
      /* ignore */
    }
  }, [])

  const cycleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')
  }, [theme, setTheme])

  const content = useMemo(() => locales[lang] || locales.en, [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = RTL.has(lang) ? 'rtl' : 'ltr'
    const title = content?.site?.meta?.title
    if (title) document.title = title
  }, [lang, content])

  useEffect(() => {
    const root = document.documentElement
    const apply = () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const resolved = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme
      root.setAttribute('data-theme', resolved)
      root.style.colorScheme = resolved
    }
    apply()
    if (theme !== 'system') return undefined
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => apply()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      setTheme,
      cycleTheme,
      content,
      site: content.site,
      core: content.core,
      industries: content.industries,
      sectors: content.sectors,
      reitos: content.reitos,
      taskora: content.taskora,
      pakmaweshi: content.pakmaweshi,
      compare: content.compare,
      cases: content.cases,
      regional: content.regional,
      gcc: content.gcc,
      pakistan: content.pakistan,
      contact: content.contact,
    }),
    [lang, setLang, theme, setTheme, cycleTheme, content],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}
