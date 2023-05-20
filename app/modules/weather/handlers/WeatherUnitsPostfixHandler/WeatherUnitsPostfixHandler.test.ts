import AppStore from 'stores/AppStore'
import { WeatherUnitsPostfixHandler } from 'modules/weather/handlers/WeatherUnitsPostfixHandler'
import { WeatherUnitsSystem } from 'models/weather/enums/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/weather/enums/AtmosphericPressureUnits'

describe('Метрическая система и давление в паскалях.', () => {
  beforeAll(() => {
    AppStore.setUnitsSystem(WeatherUnitsSystem.METRIC)
    AppStore.setAtmosphericPressureUnits(AtmosphericPressureUnits.PASCAL)
  })

  test('', () => {
    expect(WeatherUnitsPostfixHandler.getPressureUnitsPostfix()).toBe('hPa')
    expect(WeatherUnitsPostfixHandler.getWindSpeedUnitsPostfix()).toBe('m/s')
    expect(WeatherUnitsPostfixHandler.getVisibilityUnitsPostfix()).toBe('km')
    expect(WeatherUnitsPostfixHandler.getTemperatureUnitsPostfix()).toBe('C')
  })
})

// describe('Имперская система и давление в паскалях.', () => {
//   beforeAll(() => {
//     AppStore.setUnitsSystem(WeatherUnitsSystem.IMPERIAL)
//     AppStore.setAtmosphericPressureUnits(AtmosphericPressureUnits.PASCAL)
//   })
//
//   test('', () => {
//     expect(WeatherUnitsPostfixHandler.getPressureUnitsPostfix()).toBe('hPa')
//     expect(WeatherUnitsPostfixHandler.getWindSpeedUnitsPostfix()).toBe('ml/h')
//     expect(WeatherUnitsPostfixHandler.getVisibilityUnitsPostfix()).toBe('ml')
//     expect(WeatherUnitsPostfixHandler.getTemperatureUnitsPostfix()).toBe('F')
//   })
// })
