import { WeatherService } from "../../services/WeatherService";
import { CurrentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../Store";

export const fetchCurrentWeather = 
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      if(res.status === 200) {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
      };
    } catch (error) {
      console.log(error);
    }

}