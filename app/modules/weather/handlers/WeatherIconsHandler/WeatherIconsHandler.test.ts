import { WeatherIconsHandler } from 'modules/weather/handlers/WeatherIconsHandler'
import { WeatherCondition } from 'models/weather/enums/WeatherCondition'

test(`Инстанс класса WeatherIconsHandler на основанни времени суток
и состояния погоды должен вернуть соответствующую иконку`, () => {
  // Few clouds.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.FEW_CLOUDS
    ).getIconClassName()
  ).toBe('wi-day-cloudy')
  expect(
    new WeatherIconsHandler(
      false,
      WeatherCondition.FEW_CLOUDS
    ).getIconClassName()
  ).toBe('wi-night-alt-cloudy')

  // Clear sky.
  expect(
    new WeatherIconsHandler(true, WeatherCondition.CLEAR_SKY).getIconClassName()
  ).toBe('wi-day-sunny')
  expect(
    new WeatherIconsHandler(
      false,
      WeatherCondition.CLEAR_SKY
    ).getIconClassName()
  ).toBe('wi-night-clear')

  // Scattered clouds, broken clouds, overcast clouds.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.SCATTERED_CLOUDS
    ).getIconClassName()
  ).toBe('wi-cloud')
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.BROKEN_CLOUDS
    ).getIconClassName()
  ).toBe('wi-cloud')
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.OVERCAST_CLOUDS
    ).getIconClassName()
  ).toBe('wi-cloud')

  // Rain.
  expect(
    new WeatherIconsHandler(true, WeatherCondition.RAIN).getIconClassName()
  ).toBe('wi-day-rain')
  expect(
    new WeatherIconsHandler(false, WeatherCondition.RAIN).getIconClassName()
  ).toBe('wi-night-alt-rain')

  // Light rain.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.LIGHT_RAIN
    ).getIconClassName()
  ).toBe('wi-rain')

  // Shower rain.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.SHOWER_RAIN
    ).getIconClassName()
  ).toBe('wi-day-showers')
  expect(
    new WeatherIconsHandler(
      false,
      WeatherCondition.SHOWER_RAIN
    ).getIconClassName()
  ).toBe('wi-night-alt-showers')

  // Moderate rain.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.MODERATE_RAIN
    ).getIconClassName()
  ).toBe('wi-day-storm-showers')
  expect(
    new WeatherIconsHandler(
      false,
      WeatherCondition.MODERATE_RAIN
    ).getIconClassName()
  ).toBe('wi-storm-showers')

  // Thunderstorm.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.THUNDERSTORM
    ).getIconClassName()
  ).toBe('wi-day-thunderstorm')
  expect(
    new WeatherIconsHandler(
      false,
      WeatherCondition.THUNDERSTORM
    ).getIconClassName()
  ).toBe('wi-night-thunderstorm')

  // Snow.
  expect(
    new WeatherIconsHandler(true, WeatherCondition.SNOW).getIconClassName()
  ).toBe('wi-snowflake-cold')

  // Light snow.
  expect(
    new WeatherIconsHandler(
      true,
      WeatherCondition.LIGHT_SHOW
    ).getIconClassName()
  ).toBe('wi-snow')

  // Mist.
  expect(
    new WeatherIconsHandler(true, WeatherCondition.MIST).getIconClassName()
  ).toBe('wi-day-fog')
  expect(
    new WeatherIconsHandler(false, WeatherCondition.MIST).getIconClassName()
  ).toBe('wi-night-fog')
})
