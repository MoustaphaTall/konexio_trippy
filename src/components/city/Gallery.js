import React, { Component } from 'react';
import LargeCard from './LargeCard';

import Global from '../../Global';
import styled from 'styled-components';




const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Global.color.body};
    font-family: ${GLobal.font.primary};
`;

class Gallery extends Component {
    render() {
        return (
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                </div>
                <LargeCard /> {/* continue etape 8 - part2 */}                               
            </Container>
        );
    }
}

export default Gallery;