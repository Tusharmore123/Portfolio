import React from 'react'
import { useState } from 'react'
import project1 from '../assets/project1.svg'
import project2 from '../assets/project2.svg'
import project3 from '../assets/project3.svg'
import { useInView } from 'react-intersection-observer';
function Project() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is visible
    });
    const projects = [{
        title: 'Blog Project using Appwrite',
        image:project1,
        content: 'I developed a blog project using React for the frontend and Appwrite for the backend. The application allows users to create, edit, and manage blog posts through an intuitive interface. Users can add new blog posts, edit existing ones, and view posts in a structured and organized manner',
        skills: [{
            Frontend: ['Html', 'Css', 'React', 'Tailwind css'],

            Backend: ['Appwrite']
        }]
    }
    ,{
        title:'Whatsapp Automation',
        image:project2,
        content:'WhatsApp automation involves using software tools or scripts to automate interactions and tasks on the WhatsApp messaging platform.This can include sending messages, images, documents, and performing actions like logging in, responding to messages, and managing contacts. ',
        skills:[{Frontend:['Selenium'],Databse:['MongoDB']}]
    },
    {
        title:'Content Management System',
        image:project3,
        content:'At Silicon Mount Tech Services, I led a team of four as a full-stack developer to create a content management system (CMS) for managing blog posts and users.This involved creating a user-friendly interface, implementing server-side functionality, and managing database interactions.',
        skills:[{
            Frontend:['Html','Css','Javascript'],
            Backend:['Php','Django'],
            Database:['Mysql']
        }]
    }
        

    ]
   

    return (
        <>

        <section id="Projects" ref={ref}  className={`animate__animated ${inView ? 
        "animate__zoomIn" : 'hidden'}`}>

        <center><h1>My Projects</h1></center>
        
            {projects.map((project, index) => (
                
                <div className="card mb-3 container"  key={index}>
                    <div className={`row animate__animated ${inView ? 
        "animate__zoomIn" : 'hidden'}`}>
                        <div className="col-md-4">
                            <img src={project.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text fontText">{project.content}</p>
                                
                                {project.skills.map((arr)=>(Object.keys(arr).map((category, index) => (
                                    <div className='d-flex align-items-start flex-wrap' key={index}>
                                        <h5 className='card-title lh-sm'>{category}</h5>
                                        
                                    {arr[category].map((skill, index) => (
                                        <p key={index} className="shadow1 mx-1 p-2 mb-2 rounded fs-6">{skill}</p>
                                            ))}
                                    </div>
                            
                            
                                ))
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        </>
        

    )


}

export default Project