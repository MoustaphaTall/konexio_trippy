import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

class Card extends Component {
    render() {
        const { name, source, slug } = this.props;        

        return (
            <Container className="col-md-3 col-6">
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img src={source} alt={name} />
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
        );
    }
}

Card.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
}

export default Card;