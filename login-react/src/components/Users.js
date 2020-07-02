import React, { Component } from 'react'
import './Users.css'
import axios from 'axios'
import cake1 from '../cakes/blackwedding.PNG'
import cake2 from '../cakes/conecake.PNG'
import cake3 from '../cakes/cupcake.PNG'
import cake4 from '../cakes/designdrip.PNG'

class Users extends Component {
    state = {
        users: []
    }
    componentDidMount = () => {
        fetch('http://localhost:5000/api/users').then((data) => {
            // console.log(data.json)
            return data.json()
        }).then(json => {
            console.log(json)
            this.setState({
                users: json
            })
        })

    }

    render() {

        return (

            <div className="outerContainer">
                <h3>Current Users!</h3>
                <div className="usersWrap">
                    {this.state.users.map(el =>
                        <div className="nameCards" key={el._id}>
                            <img src={cake2} className="imageCard" />
                            <div className="infoCard">
                                <div>Name : {el.name}</div>
                                <div>Age : {el.age}</div>
                                <div>Email : {el.email}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default Users
