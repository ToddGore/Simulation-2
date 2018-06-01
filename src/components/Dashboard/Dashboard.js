import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './dashboard.css';
import House from "../House/House";
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/houses').then((res) => {
            console.log(res.data)
            this.setState({
                houses: res.data

            })
        })
    }

    render(props) {
        let mapHouses = this.state.houses.map((house, index) => {
            return (
                <div key={index + house.name}>
                    <House
                        // event={house}
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zip={house.zip}
                        img={house.img}
                    />
                </div>
            )
        })


        return (
            <div id='dash-main'>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {mapHouses}
            </div>
        )
    }


}