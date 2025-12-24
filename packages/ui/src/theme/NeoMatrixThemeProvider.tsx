import { useEffect } from 'react'
import { applyTheme, getTheme, ThemeMode } from '@neo-matrix/theme'

type Props = {
  mode?: ThemeMode
  children: React.ReactNode
}

let activeTheme: ThemeMode | null = null

export function NeoMatrixThemeProvider({ mode = 'light', children }: Props) {
  useEffect(() => {
    if (activeTheme !== mode) {
      applyTheme(getTheme(mode))
      activeTheme = mode
    }
  }, [mode])

  return <>{children}</>
}
