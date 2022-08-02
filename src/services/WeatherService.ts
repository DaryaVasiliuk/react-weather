import axios, { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather (city: string) : Promise<AxiosResponse<any>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8b8ee7d12bd1e6fa75f636ecb338b5f`)
  }
}