import capitalize from 'lodash.capitalize'

export class InternationalParams {
  public static getRegionNameFromRegionCode(regionCode: string) {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
    const regionName = regionNames.of(regionCode)

    return regionName || capitalize(regionCode)
  }
}
