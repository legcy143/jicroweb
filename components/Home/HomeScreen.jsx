import React from 'react'
import style from "./styles/home.module.scss"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const HomeScreen = () => {
  return (
    <main className={style.home_main}>
      <section className={style.nav_home}>
        <img src="/favicon.ico" alt="img" />
        <ol>
          <li>home</li>
          <li>carrier</li>
          <li>About us</li>
          <button>Download</button>
        </ol>
      </section>
      <section className={style.mobile_image}>
        <img src="mobile.png" alt="" />
      </section>

      <footer className={style.footer_home}>
        <section className={style.jicro_info_section}>
          <div className={style.jicro_info}>
        <p>___ indias best worker hub platform</p>
        <h1>jicro</h1>
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