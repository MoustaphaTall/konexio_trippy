import React, { Component } from 'react';
import qs from 'qs';
import Api from '../utils/Api';

import Hotels from '../components/hotel/Hotels';


class HotelsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
    }

    componentDidMount() {
        const { hotels } = this.state;

        if (hotels.length === 0) {
            const { city } = qs.parse(this.props.location.search.replace('?', ''));        
            Api.getCityHotels(city)
                .then(json => this.setState({ hotels: json.hotels }));
        }
    }

    renderHotels() {
        const { hotels } = this.state;

        if (hotels.length === 0) {
            return <h2>Choose a city from the homepage</h2>;
        }

        return <Hotels hotels={hotels} />;
    }

    render() {
        const { hotels } = this.state;        
        console.log("containers/HotelsContainer hotels", hotels);

        return this.renderHotels();
    }
}

export default HotelsContainer;