import Cookie from 'js-cookie'

import { THEME_COOKIE_NAME } from '@constants/cookie'
import type { Theme } from '@app-types/Theme'

export class ClientCookieExtractor {
  public static extractTheme(): Theme | null {
    const theme = Cookie.get(THEME_COOKIE_NAME)
    return theme ? (theme as Theme) : null
  }
}
