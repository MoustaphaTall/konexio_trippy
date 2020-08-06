import React, { Component } from 'react';
import Card from '../city/Card';
import LargeCard from '../city/LargeCard';
import Config from '../../Config.js';
const { host } = Config;

class Home extends Component {
    render() {        
        const { cities } = this.props;

        return (
            cities.length > 0 && <LargeCard name={cities[0].name} slug={cities[0].slug} source={`${host}${cities[0].source}`} />
        );
    }
}

export default Home;