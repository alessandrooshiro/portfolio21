import React, { Component } from 'react'
import './projectpage.css'

import reviewer2u1 from '../../images/reviewer2u.png'
import reviewer2u2 from '../../images/reviewer2u2.png'
import reviewer2u3 from '../../images/reviewer2u3.png'
import reviewer2u4 from '../../images/reviewer2u4.png'
import reviewer2u5 from '../../images/reviewer2u5.png'
import reviewer2u6 from '../../images/reviewer2u6.png'
import reviewer2u7 from '../../images/reviewer2u7.png'
import { Link } from 'react-router-dom'


const project =
{
    title: "R2U | Product Revision Console",
    description: "Desktop web application designed with the purpose of being a intuitive, easy to use and time-savig way for clients to review the 3D Models devloped by the R2U modeling team.",
    participation: "In this project, I conducted a primary research fase with customers and 3D Artists to understand both ends of the whole process. Afterwords, I have designed multiple wireframes, making use of various grids, layouts and propotions. The images present the final design elected.",
    live: "Know more",
    // link: "https://alessandro-oshiro.github.io/one-pager-gdc/",
    image1: reviewer2u1,
    alt1: "notrenderfarm-landingpage",
    image2: reviewer2u2,
    alt2: "notrenderfarm-jobs",
    image3: reviewer2u3,
    alt3: "notrenderfarm-projects",
    parallaxXA: ['0px', '0px'],
    parallaxXB: ['200px', '-200px']
}

class ProjectPage extends Component {

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
    }

    state = {
        isClickedA: false,
        isClickedB: false
    }

    render() {

        return (
            <>
                <div className="desktop">
                    <div className="projects-container">
                        <div style={{ width: '80vw', position: 'relative', left: '50%', transform: 'translate(-50%)' }}>
                            <div style={{ width: '100%', position: 'relative', left: '0', display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className="projects-title" style={{ textAlign: 'left' }}>{project.title}</div>
                                <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to="/">Back</Link>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '30px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <img alt='reviewer2u' src={reviewer2u1} style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <img alt='reviewer2u' src={reviewer2u7} style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0' }}>
                                    {/* {project.description}
                                    {project.participation} */}
                                    <img alt='reviewer2u' src={reviewer2u2} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0' }}>
                                    {/* {project.description}
                                    {project.participation} */}
                                    <img alt='reviewer2u' src={reviewer2u3} style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0' }}>
                                    {/* {project.description}
                                    {project.participation} */}
                                    <img alt='reviewer2u' src={reviewer2u5} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0' }}>
                                    {/* {project.description}
                                    {project.participation} */}
                                    <img alt='reviewer2u' src={reviewer2u6} style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <img alt='reviewer2u' src={reviewer2u4} style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW */}

                <div className="mobile">
                    <div className="projects-container">
                        <div className="projects-container">
                            <div style={{ width: '80vw', position: 'relative', left: '50%', transform: 'translate(-50%)' }}>
                                <div style={{ marginTop: '30px', width: '100%', position: 'relative', left: '0', display: 'flex', flexDirection: "column" }}>
                                    <br />
                                    <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to="/">Back</Link>
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '30px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    {project.title}
                                    <br />
                                    <br />
                                    {project.description}
                                    <br />
                                    <br />
                                    {project.participation}
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '30px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u1} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u7} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u2} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u3} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u5} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u6} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt='reviewer2u' src={reviewer2u4} style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectPage