
import React, { Children , useState , useEffect} from 'react'
import style from "./styles/about.module.scss"
// import admindata from "../assets/admins/admindata"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axios from 'axios';
import LoopIcon from '@mui/icons-material/Loop';

const About = () => {
  const [admindata, setadmindata] = useState([{name:"loading ..." , bio:<LoopIcon className={style.loadingspin}/>}])
  useEffect(() => {
    if(typeof window != undefined){
      let url = window.location.origin
      axios.get(`${url}/api/admin`).then((i)=>{setadmindata(i.data.data)})
    }
    }, [])
  
  // console.log("admindata json => " , admindata)
  return (
    <div className={style.aboutPage}>
      {/* <h1 className={style.AboutText}>about us</h1> */}
      <AboutTeam />

      <h1 style={{textAlign:"center" , fontSize:"1.5rem" ,marginTop:"5rem"}}>Our Team</h1>
      <div className={style.cardContainer}>
     {admindata?.map((e)=>{
      return(
          <div className={style.card} key={e.name}>
      <div className={style.card_img}>
      <img src={e.img} alt="" />
      <p>{e.name}</p>
      {/* <span>{e.role}</span> */}
      </div>
        {
          e.socailLink?.map((i)=>{
            return(
              <div className={style.socail_link} key={i.instagram}>
              {i.instagram && <a href={i.instagram} target="_blank"><InstagramIcon/></a>}
              {i.facebook && <a href={i.facebook}><FacebookIcon/></a>}
              {i.linkdin && <a href={i.linkdin}><LinkedInIcon/></a>}
              {i.Twiter && <a href={i.Twiter}><TwitterIcon/></a>}
              </div>
            )
          })
        }
      {/* <p className={style.paragraph}>{e.bio}</p> */}
    </div>
      )
})}

      {/* <OwnerCard/>
      <OwnerCard/> */}
      </div>
    </div>
  )
}

export default About

const AboutContainer = (props) => {
  return (
    <div className={style.AboutContainer}>
      {props.children}
      {/* <h1>{props.header}</h1>
      <p>{props.title}</p> */}
    </div>
  )
}

const AboutTeam = ()=>{
  return(
  <AboutContainer >
  <h1>who we are</h1>
  {/* <p>When Everyone is Growing and Boosting There Revenue Then Where Is Micro Jobs In this Field . We Are A Free Platform Who Give The User To List Thier Micro Jobs Such us Carpenter,Plumber , Ac services And All .
    Our Vision Is to Be The Best and Safe Platform For Offline Services,  , We have A Team Who always Think How Can we The Fast And Can kill Whole Competition .
    As more and more companies expand their business and increase profits, the demand for micro jobs and small services is rising exponentially. We have created a free platform that allows users to post listings for micro jobs such as carpentry work, plumbing services, HVAC repairs, and other similar tasks.
    Our goal is to become the premier and trusted marketplace for finding local offline services. We have a dedicated team that is constantly working to improve our platform and provide the fastest, most seamless experience possible while eliminating all competitors.
    With a growing number of people seeking freelance work or part-time jobs to supplement their income, we aim to connect all those searching for micro jobs with those offering their skills and talents. Security and reliability are our top priorities so that users can feel completely at ease using our service to find qualified professionals for any job.
    Whether someone needs a handyman for a few hours or a regular weekly gig, we have the perfect micro job for them. Our vision is to build a community where both job posters and job seekers feel they have found an ideal place to work together.</p> */}
  <p>Looking for a platform where you can easily find and offer services according to your needs? Look no further than Jicro!
Jicro is a service-based company that provides a platform for people to post their services, and for other people to find and take those services according to their needs. With Jicro, you can easily find service providers for a variety of services, including home cleaning, gardening, pet care, tutoring, and much more.
The best part? Jicro takes only 8% from the service providers, so you can rest assured that you`re getting a fair deal. With Jicro, you can also be confident that you`re getting quality service, as all of our service providers are thoroughly vetted and approved.
So why wait? Sign up for Jicro today and start finding or offering services that meet your needs. With Jicro, you can be confident that youre getting a fair deal, quality service, and a user-friendly platform that makes it easy to get things done.</p>
</AboutContainer>
  )
}