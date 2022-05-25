import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'> 
        <h5> Skills I Have</h5>
        <h2>My Experience</h2>
        
        <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermidiate</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                        <h4>Javascript</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Sass</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                   <div>
                   <h4>ReactJS</h4>
                    <small className='text-light'>Experienced</small>
                   </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                   <div>
                   <h4>VueJS</h4>
                    <small className='text-light'>Experienced</small>
                   </div>
                </article>


            </div>
            
        </div>
        {/* =====End Of FRONTEND ========= */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Mongo DB</h4>
                    <small className='text-light'>Intermidiate</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Firebase</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Python</h4>
                    <small className='text-light'>Intermidiate</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <div>
                    <h4>Express</h4>
                    <small className='text-light'>Intermidiate</small>
                    </div>
                </article>
                {/* <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <h4>Sass</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <h4>ReactJS</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experinced_details-icons' />
                    <h4>VueJS</h4>
                    <small className='text-light'>Experienced</small>
                </article> */}


            </div>

        </div>


        </div>
        </section>
    )
}

export default experience
