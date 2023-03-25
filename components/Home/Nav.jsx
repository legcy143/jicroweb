import React, { useState , useRef } from 'react'
import style from "./styles/nav.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const Nav = (props) => {
    let router = useRouter();
    let menuref = useRef();
    const [menustate, setmenustate] = useState(false)
  return (
    <section className={`${style.nav_home}  ${props.className} ${menustate == true && style.menu_open}`} style={props.style} ref={props.ref}>
    <img src="/logo_mini.png" alt="img" />
    <ol>
     <MenuIcon onClick={()=>{menustate == true ? setmenustate(false) : setmenustate(true)}}/>
      <li onClick={()=>{setmenustate(false);router.push("/")}}>home</li>
      <li onClick={()=>{setmenustate(false);router.push("/carrier")}}>carrier</li>
      <li onClick={()=>{setmenustate(false);router.push("/about")}}>about us</li>
      <li onClick={()=>{setmenustate(false);router.push("/contact")}}>contact us</li>
      <li onClick={()=>{setmenustate(false);router.push("/termsandcondition")}}>terms and condition</li>
      <button style={props.btnstyle}>Download apk</button>
    </ol>
  </section>
  )
}

export default Nav