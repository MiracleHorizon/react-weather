import { create } from 'zustand'

import { Theme } from '@app-types/Theme'
import { ClientCookieExtractor } from '@utils/client/ClientCookieExtractor'

interface ThemeStore {
  theme: Theme | null

  isDarkTheme: () => boolean

  setDarkTheme: VoidFunction
  setLightTheme: VoidFunction
}

const cookieTheme = ClientCookieExtractor.extractTheme()
export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: cookieTheme,

  isDarkTheme: () => get().theme === Theme.DARK,

  setDarkTheme: () => set({ theme: Theme.DARK }),
  setLightTheme: () => set({ theme: Theme.LIGHT })
}))
