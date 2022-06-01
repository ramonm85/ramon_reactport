import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'



const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/ramon-marmol-016426b2" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/ramonm85" target="_blank"><BsGithub/></a>
            <a href="https://dribbble.com/raym85" target="_blank"><BsDribbble/></a>
            
        </div>
    )
}

export default HeaderSocial
