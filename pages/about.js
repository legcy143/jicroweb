import Nav from '@/components/Home/Nav'
import OwnerCard from '@/components/utlis/OwnerCard'
import React, { Children } from 'react'
import style from "./styles/about.module.scss"

const About = () => {
  return (
    <div className={style.aboutPage}>
      <Nav />
      <h1 className={style.AboutText}>about us</h1>
      <AboutTeam />
      <div className={style.cardContainer}>
      <OwnerCard/>
      <OwnerCard/>
      <OwnerCard/>
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
  <h1>about jicro</h1>
  <p>When Everyone is Growing and Boosting There Revenue Then Where Is Micro Jobs In this Field . We Are A Free Platform Who Give The User To List Thier Micro Jobs Such us Carpenter,Plumber , Ac services And All .
    Our Vision Is to Be The Best and Safe Platform For Offline Services,  , We have A Team Who always Think How Can we The Fast And Can kill Whole Competition .
    As more and more companies expand their business and increase profits, the demand for micro jobs and small services is rising exponentially. We have created a free platform that allows users to post listings for micro jobs such as carpentry work, plumbing services, HVAC repairs, and other similar tasks.
    Our goal is to become the premier and trusted marketplace for finding local offline services. We have a dedicated team that is constantly working to improve our platform and provide the fastest, most seamless experience possible while eliminating all competitors.
    With a growing number of people seeking freelance work or part-time jobs to supplement their income, we aim to connect all those searching for micro jobs with those offering their skills and talents. Security and reliability are our top priorities so that users can feel completely at ease using our service to find qualified professionals for any job.
    Whether someone needs a handyman for a few hours or a regular weekly gig, we have the perfect micro job for them. Our vision is to build a community where both job posters and job seekers feel they have found an ideal place to work together.</p>
</AboutContainer>
  )
}