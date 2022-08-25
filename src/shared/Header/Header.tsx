import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import { store } from '../../store/Store';
import s from './Header.module.scss';
import { Props } from './Props';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
// import City from 'react-city-input';

 {}

 export const Header = (props: Props) => {
  const dispatch = useDispatch()
  const theme = useTheme();
  const options = [
    { value: 'city-1', label: 'Batumi' },
    { value: 'city-2', label: 'Tbilisi' },
    { value: 'city-3', label: 'Sarpi' }
  ];


  const colorStyles = {
    control: (styles:any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles:any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    })
  }

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  function handleInput(e:any) {
      console.log(e.currentTarget.value)
      // const{weather} = useCustomSelector(
      //   selectCurrentWeatherData);
    
      // useEffect(() => {
      //   dispatch(fetchCurrentWeather(e.currentTarget.value))
      // }, []);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo'/></div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme'/>
        </div>
      <input type='text' onChange={handleInput} placeholder={""}></input>

        {/* <Select defaultValue={options[0]} 
                styles={colorStyles}
                options={options} /> */}
      </div>
    </header>
  )
}