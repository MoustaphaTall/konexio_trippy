import React, { Component } from 'react';
import LargeCard from './LargeCard';
import Card from './Card';

import Config from '../../Config';
import Global from '../../Global';
import styled from 'styled-components';
const { host } = Config;



const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Global.color.body};
    font-family: ${Global.font.primary};
`;

class Gallery extends Component {
    renderCards() {
        const { cities } = this.props;
        return cities.map((city, index) => {
            let isLarge = false;
            
            if (index === 0) {
                isLarge = true;
            }

            return <Card {...city} host={host} key={city.slug} isLarge={isLarge} />
        });
    }

    render() {
        const { cities } = this.props;
        console.log(cities);

        return (
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                </div>
                {this.renderCards()}
            </Container>
        );
    }
}

export default Gallery;