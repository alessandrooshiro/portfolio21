import React, { Component } from 'react'
import './about.css'

class About extends Component {

    state = {
    }

    render() {

        return (
            <div className="about-container">
                    <div className="about-left">
                        <div className="about-title">Who am I:</div>
                        <div className="about-paragraph">Hi! My name is <span className="highlight">Alessandro Oshiro</span>, a creative developer and UX/UI designer, based in São Paulo, Brazil. I work as a UX/UI Designer at Real2U, an augmented reality and CGI startup. I am an Architectural Design student at University of São Paulo and Universitat Politècnica de Catalunya.</div>
                    </div>
                    <div className="about-left">
                        <div className="about-title">What do I seek:</div>
                        <div className="about-paragraph">I am currently available for freelance opportunities (both short and long-term) in front-end development, web design and UI/UX design.</div>
                    </div>
            </div>
        )
    }
}

export default About