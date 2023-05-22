import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

import {
  LOCATION_COOKIE_NAME,
  THEME_COOKIE_NAME,
  UNIT_SYSTEM_COOKIE_NAME
} from '@constants/cookie'
import type { Theme } from '@app-types/Theme'
import type { UnitSystem } from '@models/UnitSystem'

export class ServerCookieExtractor {
  constructor(private readonly cookieStore: ReadonlyRequestCookies) {}

  public extractTheme(): Theme | null {
    const theme = this.cookieStore.get(THEME_COOKIE_NAME)
    return theme ? (theme.value as Theme) : null
  }

  public extractLocation(): string | null {
    const location = this.cookieStore.get(LOCATION_COOKIE_NAME)
    return location ? location.value : null
  }

  public extractUnitSystem(): UnitSystem | null {
    const unitSystem = this.cookieStore.get(UNIT_SYSTEM_COOKIE_NAME)
    return unitSystem ? (unitSystem.value as UnitSystem) : null
  }
}
