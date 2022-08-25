export type Weather = {
  main: {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
  },
  wind : {
    speed: number
  },
}