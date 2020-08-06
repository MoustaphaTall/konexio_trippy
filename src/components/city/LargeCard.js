import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

class LargeCard extends Component {
    render() {
        const { name, slug, source } = this.props;            

        return (
            <Container className="col-md-6 col-12">
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img className="img-fluid" src={source} alt={name} />
                        <p>{name}</p>                        
                    </div>
                </Link>
            </Container>
        );
    }
}

LargeCard.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
}

export default LargeCard;