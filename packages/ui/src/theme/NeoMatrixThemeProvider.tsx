import { useEffect } from 'react'
import { applyTheme, getTheme, ThemeMode } from '@neomatrix/theme'

type Props = {
  mode: ThemeMode
  children: React.ReactNode
}

export function NeoMatrixThemeProvider({ mode, children }: Props) {
  useEffect(() => {
    applyTheme(getTheme(mode))
  }, [mode])

  return <>{children}</>
}
