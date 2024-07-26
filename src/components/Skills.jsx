import React from 'react'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import java from '../assets/java.svg'
import javascript from '../assets/javascript.svg'
import mongodb from '../assets/mongodb.svg'
import git from '../assets/git.svg'
import mysql from '../assets/mysql.svg'
import react from '../assets/react.svg'
import python from '../assets/python.svg'
import scrapy from '../assets/Scraper.png'
import flask from '../assets/flask.svg' 
import express from '../assets/Express-js.png'
import { useInView } from 'react-intersection-observer';

function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is visible
    });
    return (
        <>
            <div className=" text-center   skills" id="Skills">
                <h2>Skills</h2>
                <div className="d-flex justify-content-center gap-2 flex-wrap ">
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                        <img src={css} alt="css logo"  />
                            <br/>
                        <b >css</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                    <img src={html} alt="html logo"  />
                    <br/>
                    <b >Html</b>
                    <br/>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                    <img src={react} alt="react logo"  />
                    <br/>
                    <b>React</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                    <img src={java} alt="java logo"  />
                    <br/>
                    <b>java</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref} >
                    <img src={python} alt="java logo" />
                    <br/>
                    <b>Python</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                    <img src={express} alt="java logo" />
                    <br/>
                    <b>Express js</b>
                    </picture>
                </div>
                    
                    <div className="d-flex justify-content-center gap-2 flex-wrap ">
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                    <img src={javascript} alt="java logo"  />
                    <br/>
                    <b>Javascript</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}    animate__slow `} ref={ref}>
                        <img src={flask} alt="flask logo"  />
                            <br/>
                        <b >flask</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                        <img src={mongodb} alt="mongodb logo"  />
                            <br/>
                        <b >mongodb</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                        <img src={git} alt= "git logo"  />
                            <br/>
                        <b >git</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                        <img src={scrapy} alt="scrapy logo"  />
                            <br/>
                        <b >scrapy</b>
                    </picture>
                    <picture className={`col-lg col-md-3 col-sm-4 col-12   animate__animated ${inView ? 
        "animate__flipInX" : 'hidden'}   animate__slow `} ref={ref}>
                        <img src={mysql} alt="mysql logo"  />
                            <br/>
                        <b >mysql</b>
                    </picture>
                    

                </div>
            </div>
        </>
    )
}

export default Skills