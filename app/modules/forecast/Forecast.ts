import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'

export class Forecast {
  constructor(protected _forecast: IForecastSegment[]) {}
}
