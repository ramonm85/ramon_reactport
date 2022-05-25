import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/casey_stengel.png'
import IMG2 from '../../assets/alany_site.png'
import IMG3 from '../../assets/scrape.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const portfolio = () => {
    return (
        <section id='portfolio'> 
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />

                </div>
                <h3> Vue app for Bus Operators</h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com/ramonm85/caseyStengel" className="btn" target='blank' > github</a>
                <a href="https://caseystengel.netlify.app/" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG2} alt="" />

                </div>
                <h3> A Music Box for niece</h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com/ramonm85/alanysite" className="btn" target='blank'> github</a>
                <a href="https://alanysmusicbox.netlify.app/" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG3} alt="" />

                </div>
                <h3> Jquery Practice site </h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com/ramonm85/scrape" className="btn" target='blank' > github</a>
                <a href="https://scrapelife.netlify.app" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG4} alt="" />

                </div>
                <h3> this portfolio item Title</h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com" className="btn"> github</a>
                <a href="https://github.com" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG5} alt="" />

                </div>
                <h3> this portfolio item Title</h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com" className="btn"> github</a>
                <a href="https://github.com" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG6} alt="" />

                </div>
                <h3> this portfolio item Title</h3>
                <div className="portfolio_item-cta">
                <a href="https://github.com" className="btn"> github</a>
                <a href="https://github.com" className="btn btn-primary" target='blank'> Live Demo</a>
                </div>
            </article>
            
        </div>
        
        
        
        
        
        </section>
    )
}

export default portfolio
