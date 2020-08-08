import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
        
`;
const Image = styled.img`
    
`;
class Card extends Component {
    render() {
        const { name, source, slug, host, isLarge } = this.props;    
        const src= `${host}${source}`;
        const size = isLarge ? 'col-12' : 'col-6';        

        return (
            <Container className={size}>
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <Image className="img-fluid" src={src || source} alt={name} />
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