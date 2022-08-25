import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';
import { Weather } from '../../../../store/types/types';
import { Time } from '../data_time/Time'
import { Data } from '../data_time/Date'

interface Props {
  weather: Weather;
}

 export const ThisDay = ({weather}: Props) => {
  console.log('weather',weather)
 return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id = 'sun'/>
      </div>
      <div className={s.bottom__block}>
        <div className = {s.this__date}>
          Дата: <span><Data/></span>
        </div>
        <div className={s.this__time}>
          Время: <span><Time/></span>
        </div>
        <div className={s.this__city}>
          Город: <span>Batumi</span>
        </div>
      </div>
    </div>
  )
}

