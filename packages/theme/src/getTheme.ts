import { lightTheme } from './light'
import { darkTheme } from './dark'
import { ThemeMode } from './types'

export function getTheme(mode: ThemeMode) {
  return mode === 'dark' ? darkTheme : lightTheme
}
