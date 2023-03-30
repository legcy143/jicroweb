import React, { useRef, useState } from 'react'
import style from "./styles/home.module.scss"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const HomeScreen = () => {
  return (
    <main className={`${style.home_main}`}>
      <section className={style.mobile_image}>
        <img src="mobile.png" alt="" />
      </section>
      <div className={style.footerText}>
        <h1>the platform for all to grow with us</h1>
        <p>kuch mart karo bus zikr karo</p>
        <div className={style.social_icon}>
            <InstagramIcon data="you-tube" />
            <YouTubeIcon />
            <TwitterIcon />
            <FacebookIcon />
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