import React, { Component } from 'react'
// import styles from './home.module.css'
import NavBar from '../../components/NavBar'
import ProjectPage from '../../components/ProjectPage'
import Contact from '../../components/Contact'
import Form from '../../components/Form'

class Reviewer2u extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ProjectPage />
                <Form />
                <Contact />
            </div >
        )
    }
}

export default Reviewer2u