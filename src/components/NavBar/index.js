import React, { Component } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

import logo from '../../images/logo@2x.png'

const items = [
    'Contact'
]

class NavBar extends Component {

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
            <div className="navbar-container">
                <Link to="/">
                    <button className="logo" onClick={() => window.scrollTo(0, 0)}>
                        <img alt="logo" src={logo} style={{ transform: `rotate(${this.state.theposition * 2160}deg)` }} />
                    </button>
                </Link>
                <div className="navbar-items">
                    {items.map((item) => (
                        <button className="navbar-button" onClick={() => window.scrollTo(0, 10000)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

export default NavBar