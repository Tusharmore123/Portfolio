import React from 'react'
import intro from '../assets/section1.svg'

function Intro() {
  return (
    <>
    
    <section className='d-flex flex-row flex-wrap w-100  animate__animated animate__fadeInLeft animate__slow' id='section1'>
    <article className='h-50 w-45 mx-3' >
        <h1>
            <span>Hello I am</span> <b style={{textShadow:'4px 4px  rgb(194, 202, 238)'  }}>Tushar More</b> .

        </h1>
        <p className='fs-1 '> <b>Software </b><b style={{ color:'transparent',WebkitTextStroke:'2px blue'}}>Developer
          </b> Based in Navi  Mumbai.</p>
        <p className='lh-sm text-sans-serif px-2 fontText'>
        I'm actively seeking a software developer role where I can leverage my skills to drive both personal and company growth.
        I have Strong skills in object-oriented programming, full-stack development, team leadership, web automation, web development, web scraping, and IoT. Possesses excellent communication skills,  proactive, multitasking, and self-motivated, and  committed to staying updated with technology trends.
       </p>
        {/* <p className='lh-sm text-sans-serif px-2 fontText'>
        Experienced Software Engineer with a B.Tech in Computer Science. Proficient in MySQL, MongoDB, React, JavaScript, Python, C, and Java. Strong skills in object-oriented programming, full-stack development, team leadership, web automation, web development, web scraping, and IoT. Possesses excellent communication skills, is proactive, multitasking, and self-motivated, and is committed to staying updated with technology trends.
        </p> */}
    </article>
    <picture  className='w-45 d-flex justify-content-center '>

    < img src={intro}/>
    </picture>
    </section>
    </>
  )
}

export default Intro