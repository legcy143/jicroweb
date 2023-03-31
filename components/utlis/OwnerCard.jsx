import React from 'react'
import style from "./card.module.scss"
import InstagramIcon from '@mui/icons-material/Instagram';

const OwnerCard = (props) => {
  return (
    <div className={style.card} key={props.key}>
      <div className={style.card_img}>
      <img src="" alt="img" />
      <p>{props.name}</p>
      </div>
      <div className={style.socail_link}>
        <InstagramIcon />
        <InstagramIcon />
        <InstagramIcon />
      </div>
      <p className={style.paragraph}>{props.bio}</p>

    </div>
  )
}

export default OwnerCard