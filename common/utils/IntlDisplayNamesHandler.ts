import capitalize from 'lodash.capitalize'

export class IntlDisplayNamesHandler {
  public static getRegionNameByRegionCode(regionCode: string): string {
    const regionNames = new Intl.DisplayNames(['en'], {
      type: 'region',
      fallback: 'code',
      languageDisplay: 'standard',
      style: 'long'
    })
    return regionNames.of(regionCode) ?? capitalize(regionCode)
  }
}
