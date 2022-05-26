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
                            <small> 1 year working</small>
                        </article>

                        <article className='about_card'>
                        <FiUsers className= 'about_icon'/>
                            <h5>Clients</h5>
                            <small> 2 Worldwide</small>
                        </article>
                        <article className='about_card'>
                        <AiOutlineFolderOpen className= 'about_icon'/>
                            <h5>Projects</h5>
                            <small> 3+ Completed</small>
                        </article>
                    </div>
                    <p>
                    Hello, my name is Ramon Marmol. I am the creator of ramonreacts.netlify.app. ( I Love to listen to music, spend time with friends and travel.
                    I like to code and push myself learn new things,
                    I would love to be a Web developer. 
                    I created this website with the intention to show my ability to learn different javascript frameworks including "React". 
                    with the inention to show that i am eager to expand my knoledge in this field. 
                    Im hoping this allows you to cofide you in my ability to give you the confidence in the Knowledge ive thought myself  ) 
                    Let me help you take your next step !!
                    
                    </p>
                    <a href="#contact" className='btn btn-primary'> Lets Talk</a>


                </div>
            </div>
            </section>


        
    )
}

export default about
