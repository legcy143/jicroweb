import React, { useRef, useState } from 'react'
import style from "./styles/home.module.scss"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Nav from './Nav';
import BackgroudGrad from '../background/BackgroudGrad';

const HomeScreen = () => {
  return (
    <main className={`${style.home_main}`}>
       {/* <BackgroudGrad />  */}
      <Nav className={style.homeNav} />
      <section className={style.mobile_image}>
        <img src="mobile.png" alt="" />
      </section>

      <footer className={style.footer_home}>
        <section className={style.jicro_info_section}>
          <div className={style.jicro_info}>
        <h1>jicro</h1>
        <p>kuch mart karo bus jicro karo</p>
          </div>
          <div className={style.social_icon}>
            <InstagramIcon data="you-tube" />
            <YouTubeIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </section>
          <p className={style.readmore}>read more <br /> <KeyboardTabIcon/></p>
      </footer>
    </main>
  )
}

export default HomeScreen