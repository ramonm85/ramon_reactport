import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
   const[activeNav, setActiveNav] = useState('#')
    return (
        
        <nav>
            <a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><FiHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
            <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
            <a href="#portfolio"onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdOutlineMessage/></a>
        </nav>
    )
}

export default Nav
