import React, { useRef, useState } from 'react'
import style from "./styles/home.module.scss"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Homebg from './Homebg';

const HomeScreen = () => {
  return (
    <main className={`${style.home_main}`}>
      <section className={style.mobile_image}>
        <img src="mobile.png" alt="" />
      <Homebg/>
      </section>
      <div className={style.footerText}>
        <h1>the platform for all to grow with us</h1>
        <p>kuch mart karo bus zikr karo</p>
        <div className={style.social_icon}>
          <a href="https://www.instagram.com/jicroindia/">
            <InstagramIcon/>
          </a>
          <a href="youtube">
            <YouTubeIcon />
          </a>
          <a href="twitter">
            <TwitterIcon />
          </a>
          <a href="facebook">
            <FacebookIcon />
          </a>
          <a href="mailto:legcy143@gmail.com">
            <MailIcon />
          </a>
          </div>
      </div>

      {/* <footer className={style.footer_home}>
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
       </footer> */}
    </main>
  )
}

export default HomeScreen