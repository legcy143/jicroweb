import React from 'react'
import style from "./card.module.scss"
import InstagramIcon from '@mui/icons-material/Instagram';

const OwnerCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
      <img src="" alt="img" />
      <p>jicro user</p>
      </div>
      <div className={style.socail_link}>
        <InstagramIcon />
        <InstagramIcon />
        <InstagramIcon />
      </div>
      <p className={style.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis, maiores fugiat, quas dicta illo eaque repudiandae magnam neque autem laudantium perferendis maxime perspiciatis culpa ullam consectetur! Nemo, expedita quis?</p>

    </div>
  )
}

export default OwnerCard