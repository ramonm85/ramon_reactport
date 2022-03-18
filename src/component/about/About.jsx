import React from 'react'
import "./about.css"
import ME from '../../assets/rayport2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'


const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know me</h5>
            <h2>About me</h2>
            <div className="container about_container" >
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="" />
                    </div>


                </div>

                <div className="about_content">
                    <div className="about_cards">
                        
                        <article className='about_card'>
                        <FaAward className= 'about_icon'/>
                            <h5>Experince</h5>
                            <small> 3+ years working</small>
                        </article>

                        <article className='about_card'>
                        <FiUsers className= 'about_icon'/>
                            <h5>Clients</h5>
                            <small> 200+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                        <AiOutlineFolderOpen className= 'about_icon'/>
                            <h5>Projects</h5>
                            <small> 80+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, perspiciatis veritatis qui voluptate, ea molestias rem et omnis praesentium incidunt magnam harum consequuntur ex, quas laborum dicta cumque assumenda! Cumque!
                    </p>
                    <a href="#contact" className='btn btn-primary'> Lets Talk</a>


                </div>
            </div>
            </section>


        
    )
}

export default about
