import React from 'react'
import introLogo from '../assets/Intro.svg'
function About() {
  return (
    <>
   
    
    <section className='d-flex  flex-row flex-wrap gap-2 animate__animated animate__fadeInRight  animate__slow Intro' id='Aboutme'>
        <div className='w-45 h-100 d-flex flex-row justify-content-sm-center justify-content-center' >
          

          <img src={introLogo} className="image"/>
          </div>
        <div className='w-50 h-100 '><h1 className='text-center' style={{textShadow:'4px 4px  rgb(194, 202, 238)'  }}>About me</h1>
        <p className='px-2 fontText'>Hi, I'm Tushar More, a B.Tech graduate in Computer Science from Dr. Babasaheb Ambedkar Technological University. With experience at <b><em>Sciative Solutions and Silicon Mount Tech Services</em></b>, I've honed my skills in software development. My expertise includes web development with React and Appwrite, creating scrapers using Python and Selenium, and managing databases like SQL and MongoDB. I’ve also developed an IoT smart gate system and a CMS for blog management. </p>
        </div>
    </section>
   
    </>
  )
}

export default About