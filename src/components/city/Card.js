import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

class Card extends Component {
    /* renderLarge() {
        const { name, source, slug, host, isLarge } = this.props;    
        const src= `${host}${source}`;

        return (
            <Container className="col-6">
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img className="img-fluid" src={src || source} alt={name} />
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
        );
    }

    renderSmall() {
        const { name, source, slug, host, isLarge } = this.props;    
        const src= `${host}${source}`;
        
        return (
            <Container className="col-6">
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img className="img-fluid" src={src || source} alt={name} />
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
        );
    } */
    render() {
        const { name, source, slug, host, isLarge } = this.props;    
        const src= `${host}${source}`;
        const size = isLarge ? 'col-md-6 col-12' : 'col-md-3 col-6';

        return (
            <Container className={size}>
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img className="img-fluid" src={src || source} alt={name} />
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
            // <>
            //     {isLarge ? this.renderLarge() : this.renderSmall()}
            // </>
        );
    }
}

Card.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
}

export default Card;