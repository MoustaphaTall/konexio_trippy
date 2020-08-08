import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

class LargeCard extends Component {
    render() {
        const { name, slug, source, host } = this.props;
        const src = `${host}${source}`;           

        return (
            <div className="col-6">
                <Container className="col-md-6 col-12">
                    <Link to={`/hotels?city=${slug}`}>
                        <div>
                            <img className="img-fluid" src={src || source} alt={name} />
                            <p>{name}</p>                        
                        </div>
                    </Link>
                </Container>
            </div>
        );
    }
}

LargeCard.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
}

export default LargeCard;