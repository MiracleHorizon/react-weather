import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

import {
  CITY_COOKIE_NAME,
  GEOLOCATION_COOKIE_NAME,
  HOUR_CYCLE_COOKIE_NAME,
  LANGUAGE_COOKIE_NAME,
  THEME_COOKIE_NAME,
  UNIT_SYSTEM_COOKIE_NAME
} from '@constants/cookie'
import type { Theme } from '@app-types/Theme'
import type { HourCycle } from '@app-types/HourCycle'
import type { Language } from '@models/Language'
import type { UnitSystem } from '@models/UnitSystem'
import type { Geolocation } from '@models/Geolocation'

export class ServerCookieExtractor {
  constructor(private readonly cookieStore: ReadonlyRequestCookies) {}

  public extractTheme(): Theme | null {
    const theme = this.cookieStore.get(THEME_COOKIE_NAME)
    return theme ? (theme.value as Theme) : null
  }

  public extractCity(): string | null {
    const city = this.cookieStore.get(CITY_COOKIE_NAME)
    return city ? city.value : null
  }

  public extractUnitSystem(): UnitSystem | null {
    const unitSystem = this.cookieStore.get(UNIT_SYSTEM_COOKIE_NAME)
    return unitSystem ? (unitSystem.value as UnitSystem) : null
  }

  public extractGeolocation(): Geolocation | null {
    const geolocation = this.cookieStore.get(GEOLOCATION_COOKIE_NAME)
    return geolocation ? JSON.parse(geolocation.value) : null
  }

  public extractLanguage(): Language | null {
    const language = this.cookieStore.get(LANGUAGE_COOKIE_NAME)
    return language ? (language.value as Language) : null
  }

  public extractHourCycle(): HourCycle | null {
    const hourCycle = this.cookieStore.get(HOUR_CYCLE_COOKIE_NAME)
    return hourCycle ? (hourCycle.value as HourCycle) : null
  }
}
