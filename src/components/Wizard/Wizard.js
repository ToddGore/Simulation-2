import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            img: ''
        }

        this.handleinput = this.handleinput.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleinput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick() {
        let body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            img: this.state.img
        }
        axios.post('/houses', body).then((res) => {
            this.setState({
                products: res.data,
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                img: ''
            })
        })

    }







    render() {

        return (
            <div>
                Wizard
                <br />
                <Link to='/'><button>Cancel</button></Link>
                <br />
                <input placeholder="Home Name" name='name' value={this.state.name} onChange={this.handleinput} />
                <br />
                <input placeholder="Address" name='address' value={this.state.address} onChange={this.handleinput} />
                <br />
                <input placeholder="City" name='city' value={this.state.city} onChange={this.handleinput} />
                <br />
                <input placeholder="State" name='state' value={this.state.state} onChange={this.handleinput} />
                <br />
                <input placeholder="Zip" name='zipcode' value={this.state.zipcode} onChange={this.handleinput} />
                <br />
                <input placeholder="Image link" name='img' value={this.state.img} onChange={this.handleinput} />
                <br />
                <button onClick={this.handleClick}>Complete</button>
            </div >
        )
    }

}