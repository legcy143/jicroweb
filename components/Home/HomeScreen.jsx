import React, { useState } from 'react'
import style from "./styles/home.module.scss"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const HomeScreen = () => {
  let router = useRouter();
  const [menustate, setmenustate] = useState(false)
  return (
    <main className={`${style.home_main}`}>
      <section className={`${style.nav_home} ${menustate == true && style.menu_open} `}>
        <img src="/favicon.ico" alt="img" />
        <ol>
         <MenuIcon onClick={()=>{menustate == true ? setmenustate(false) : setmenustate(true)}}/>
          <li onClick={()=>{setmenustate(false);router.push("/")}}>home</li>
          <li onClick={()=>{setmenustate(false);router.push("/carrier")}}>carrier</li>
          <li onClick={()=>{setmenustate(false);router.push("/about")}}>about us</li>
          <li onClick={()=>{setmenustate(false);router.push("/contact")}}>contact us</li>
          <li onClick={()=>{setmenustate(false);router.push("/termsandcondition")}}>terms and condition</li>
          <button>Download apk</button>
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