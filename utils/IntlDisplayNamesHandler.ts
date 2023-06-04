import { StringTransformer } from './StringTransformer'

export class IntlDisplayNamesHandler {
  public static transformRegionCodeToRegionName(regionCode: string): string {
    const regionNames = new Intl.DisplayNames(['en-EN'], {
      type: 'region',
      fallback: 'code',
      languageDisplay: 'standard',
      style: 'long'
    })
    return (
      regionNames.of(regionCode) ?? StringTransformer.capitalizeWord(regionCode)
    )
  }
}
