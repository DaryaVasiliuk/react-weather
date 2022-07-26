import React from 'react';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { ThisDay } from './components/ThisDay/ThisDay';
import s from './Home.module.scss';
import { Days } from './components/Days/Days';

interface Props {

}
export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>

      <Days/>

    </div>
  )
}