import React, { Component } from 'react'
import './cursor.css'


class Cursor extends Component {


    render() {

        return (
            <div className="cursor"
            style={{ left: this.props.left, top: this.props.top }} 
            />
        )
    }
}

export default Cursor