import React, { Component } from 'react';
import Card from '../city/Card';
import Gallery from '../city/Gallery';
import LargeCard from '../city/LargeCard';
import Config from '../../Config.js';
const { host } = Config;

class Home extends Component {
    render() {        
        const { cities } = this.props;

        return (
            <div className="container">
                {cities.length > 0 && <Gallery cities={cities} />}
            </div>
        );
    }
}

export default Home;