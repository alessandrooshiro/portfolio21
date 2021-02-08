import React, { Component } from 'react'
import './contact.css'

import logo from '../../images/logo@2x.png'
import linkedIn from '../../images/linkedin-logo.png'
import github from '../../images/github-logo.png'

class Contact extends Component {

    state = {
        theposition: window.pageYOffset
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }

    render() {

        return (
            <div className="contact-container">
                <button className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <img alt="logo" src={logo} style={{ transform: `rotate(${this.state.theposition * 2160}deg)` }} />
                </button>
                <div className="contact-items">
                    <div className="contact-info">
                        alessandro.oshiro@usp.br
                    </div>
                    <div className="contact-info">
                        +55 11 97248-2324
                    </div>
                    <button className="contact-social">
                        <a href="https://github.com/alessandrooshiro" rel="noopener noreferrer" target="_blank">
                            <img alt="github-logo" src={github} />
                        </a>
                    </button>
                    <button className="contact-social">
                        <a href="https://www.linkedin.com/in/alessandro-oshiro/" rel="noopener noreferrer" target="_blank">
                            <img alt="linkedin-logo" src={linkedIn} />
                        </a>
                    </button>
                </div>
            </div>
        )
    }
}

export default Contact