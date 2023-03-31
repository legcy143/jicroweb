import React, { useState , useRef } from 'react'
import style from "./styles/nav.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import PlayStoreIcon from "../../assets/playstoreIcon.png"
import Image from 'next/image';

const Nav = (props) => {
    let router = useRouter();
    let path = router.pathname
    let menuref = useRef();
    const [menustate, setmenustate] = useState(false)
  return (
    <section className={`${style.nav_home}  ${props.className} ${menustate == true && style.menu_open}`} style={props.style} ref={props.ref}>
    <img src="/logo_mini.png" alt="img" />
    <ol>
     <MenuIcon onClick={()=>{menustate == true ? setmenustate(false) : setmenustate(true)}}/>
      <li className={`${path == "/" && style.activeLi}`} onClick={()=>{setmenustate(false);router.push("/")}}>home</li>
      <li className={`${path == "/carrier" && style.activeLi}`} onClick={()=>{setmenustate(false);router.push("/carrier")}}>carrier</li>
      <li  className={`${path == "/about" && style.activeLi}`} onClick={()=>{setmenustate(false);router.push("/about")}}>about us</li>
      <li  className={`${path == "/termsandcondition" && style.activeLi}`} onClick={()=>{setmenustate(false);router.push("/termsandcondition")}}>terms and condition</li>
      <button style={props.btnstyle}>
        <img src={PlayStoreIcon} alt="" />
        <Image src={PlayStoreIcon} width="auto" height={30} alt=""/>
        <div>
        <p>get it on</p>
        <h1>google play</h1>
        </div>
        </button>
    </ol>
  </section>
  )
}

export default Nav