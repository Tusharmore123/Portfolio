import React from 'react'
import { useInView } from 'react-intersection-observer';
function MyExperience() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is visible
    });
    return (
        <>
            <section className={`bg-dark experience animate__animated ${inView ? 
        "animate__fadeInUp animate_slow " : 'hidden'}`} ref={ref} id="Experience">

                < div className='d-flex flew-wrap flex-row   container myexperience'>

                    <div className='w-50 text-light '>
                        <p className='fs-1'>MyExperience</p>
                    </div>
                    <div className='experienceArticles  w-50 '>

                    <article className='mx-2 mt-4 fontText'>
                        <div className='float-start text-light '>
                            <p className='  fs-4 lh-1'>Software Developer Analyst</p>
                            <p className='fs-6 text-light  '>Silicon Mount Tech Service Pvt Ltd</p>
                        </div>
                        <div>
                            <p className='text-light float-end lh-lg '>feb-2023  June-2023</p>
                        </div>
                        <ul className='clearfix text-light' >
                            <li >At Silicon Mount Tech Services Pvt Ltd, I led a team of four as a full-stack developer to build a comprehensive content management system (CMS)</li>
                            <li>Leveraging technologies such as HTML, CSS, JavaScript, PHP, and MySQL, I developed a dynamic and responsive platform for managing blog posts.</li>
                            <li>My role involved designing and architecting the application, ensuring efficient data handling and a user-friendly interface. </li>
                            <li>This project showcased my leadership abilities, technical skills, and commitment to delivering high-quality software solutions.</li>
                        </ul>
                        <hr className='text-light'/>
                    </article>
                    <article className='mx-2 mt-4 fontText' >
                        <div className='float-start text-light '>
                            <p className='  fs-4 lh-1'>Data Engineer</p>
                            <p className='fs-6 text-light  '>Sciative Solutions</p>
                        </div>
                        <div>
                            <p className='text-light float-end lh-lg '>oct-2023  mar-2024</p>
                        </div>
                        <ul className='clearfix text-light' >
                            <li >At Sciative Solutions, I worked as a Data Engineer , during which I honed my skills in web scraping, automation, and database management. </li>
                            <li>My primary responsibility involved creating multiple scrapers for various websites using the Scrapy framework and Selenium for automation.</li>
                            <li>This experience enabled me to extract valuable data efficiently and accurately, which was then stored in MongoDB for further analysis and utilization.</li>
                            
                        </ul>

                    </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyExperience