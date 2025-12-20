import { Theme } from './types'

export function applyTheme(theme: Theme) {
  const root = document.documentElement

  root.style.setProperty('--nm-color-background', theme.colors.background)
  root.style.setProperty('--nm-color-text', theme.colors.text)
  root.style.setProperty('--nm-color-primary', theme.colors.primary)
}
