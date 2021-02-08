import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

class Form extends Component {
    state = {
        email: '',
        isEmailSent: false
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        const payload = `Contato por porfolio!!!! Email: ${this.state.email}`

        console.log(payload)

        axios.post('https://hooks.zapier.com/hooks/catch/4447207/osr4dhg/', { payload }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(res => {
            console.log(res)
            console.log(res.data)
            this.setState({
                isEmailSent: true
            })
        })
    }

    render() {

        return (
            <div className="forms-container">
                <div className="contact-message">{this.state.isEmailSent ? <span>Thank you! I'll get back to you soon!</span> : <span>Let's work together!<br />Tell me your email and I'll reach you!</span>}</div>
                <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" style={this.state.isEmailSent ? { display: 'none' } : { display: 'inherit' }}>
                    <label className="input-label">
                        <input type="text" placeholder="john.doe@gmail.com" name="email" className="input" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </label>
                    <button type="submit" className="form-button">Send</button>
                </form>
                <button style={this.state.isEmailSent ? { display: 'inherit' } : { display: 'none' }} className="form-button-again" onClick={() => this.setState({ isEmailSent: !this.state.isEmailSent })}>Send again</button>
            </div >
        )
    }
}

export default Form