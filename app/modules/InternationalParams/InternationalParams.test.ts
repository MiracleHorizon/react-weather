import { InternationalParams } from 'modules/InternationalParams'

describe('Модуль InternationalParams обрабатывает международные параметры', () => {
  test(`Метод getRegionNameFromRegionCode должен вернуть полное название 
  региона, получив его код`, () => {
    expect(InternationalParams.getRegionNameFromRegionCode('RU')).toBe('Russia')
    expect(InternationalParams.getRegionNameFromRegionCode('US')).toBe(
      'United States'
    )
    expect(InternationalParams.getRegionNameFromRegionCode('GB')).toBe(
      'United Kingdom'
    )
    expect(InternationalParams.getRegionNameFromRegionCode('PL')).toBe('Poland')
    expect(InternationalParams.getRegionNameFromRegionCode('CN')).toBe('China')
    expect(InternationalParams.getRegionNameFromRegionCode('CA')).toBe('Canada')
    expect(InternationalParams.getRegionNameFromRegionCode('PH')).toBe(
      'Philippines'
    )
    expect(InternationalParams.getRegionNameFromRegionCode('KZ')).toBe(
      'Kazakhstan'
    )
    expect(InternationalParams.getRegionNameFromRegionCode('SG')).toBe(
      'Singapore'
    )
    expect(InternationalParams.getRegionNameFromRegionCode('CH')).toBe(
      'Switzerland'
    )
  })
})
