import React, { Component } from 'react'
// import styles from './home.module.css'
import NavBar from '../../components/NavBar'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Form from '../../components/Form'

class Portfolio extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <About />
                <Projects />
                <Form />
                <Contact />
            </div >
        )
    }
}

export default Portfolio