import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo"> Ramon Marmol</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.facebook.com"><FaFacebookF/></a>
                <a href="https://www.instagram.com"><BsInstagram/></a>
                <a href="https://www.twitter.com"><FiTwitter/></a>
            </div>
            <div className="footer_copyright">
                <small> &copy; Ramon Marmol. all rights reserved</small>
            </div>


        </footer>
    )
}

export default footer
