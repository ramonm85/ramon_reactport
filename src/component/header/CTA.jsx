import React from 'react'
import CV from '../../assets/ramonresume1.pdf'

const cta = () => {
    return (
        <div className='cta'>
            <button className="btn">
            <a href={CV}download>Download CV</a>
            </button>
            <button className="btn ">

            <a href="#contact">Lets Talk</a>
            </button>
            
        </div>
    )
}

export default cta
