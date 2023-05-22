import Cookie from 'js-cookie'

import {
  CITY_COOKIE_NAME,
  THEME_COOKIE_NAME,
  UNIT_SYSTEM_COOKIE_NAME
} from '@constants/cookie'
import type { Theme } from '@app-types/Theme'
import type { UnitSystem } from '@models/UnitSystem'

export class ClientCookieExtractor {
  public static extractTheme(): Theme | null {
    const theme = Cookie.get(THEME_COOKIE_NAME)
    return theme ? (theme as Theme) : null
  }

  public static extractCity(): string | null {
    const city = Cookie.get(CITY_COOKIE_NAME)
    return city ?? null
  }

  public static extractUnitSystem(): UnitSystem | null {
    const unitSystem = Cookie.get(UNIT_SYSTEM_COOKIE_NAME)
    return unitSystem ? (unitSystem as UnitSystem) : null
  }
}
