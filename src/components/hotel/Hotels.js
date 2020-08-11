import React, { Component } from 'react';
import Card from '../hotel/Card';

import Config from '../../Config';
const { host } = Config;



class Hotels extends Component {
    renderCards() {
        const { hotels } = this.props;
        
        return hotels.map(hotel =>
            <Card {...hotel} source={`${host}${hotel.pictures[0]}`} key={hotel._id} />
        );        
    }
    
    render() {
        const { hotels } = this.props;
        console.log("cmp/hotel/Hotels hotels", this.props.hotels);
        return (
            <div className="container">
                <div className="row">
                    {this.renderCards()}
                </div>
            </div> 
        );
    }
}

export default Hotels;