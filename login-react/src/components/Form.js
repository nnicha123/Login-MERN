import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'
class Form extends Component {
    state = {
        name: 'Test User',
        age: 23,
        email: 'test@gmail.com',
        imgsrc: ''
    }

    post = () => {
        axios.post('http://localhost:5000/api/users/', this.state)
            .then(res => console.log(res.data))
        this.setState({
            name: '',
            age: 0,
            email: '',
            imgsrc: ''
        })
    }
    render() {
        return (
            <div className="outerForm">
                <h1>Register to become part of the Family!</h1>
                <form onSubmit={this.post}>
                    <div className="form-group">
                        <label>Name</label>
                        <br />
                        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <br />
                        <input type="Number" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <br />
                        <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <br />
                        <input type="text" value={this.state.imgsrc} onChange={(e) => this.setState({ imgsrc: e.target.value })} />
                    </div>
                    <button type="submit" className="postButton">Post </button>
                </form>
            </div>
        )
    }
}

export default Form
