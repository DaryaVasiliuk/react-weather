import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import { Props } from './Props';

 {}

 export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo'/></div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_them}>
          <GlobalSvgSelector id='change-theme'/>
        </div>
      </div>
    </header>
  )
}

