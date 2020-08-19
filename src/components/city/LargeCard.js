import React from 'react';
import styled from 'styled-components';
import Link from '../navigation/Link';

const Container = styled.div`

`;

class LargeCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            source: 'http://via.placeholder.com/300x200',
            slug: ''
        }
    }


    render() {
        
    const {
        name,
        slug,
        source
    } = this.state;

        console.log("render#LArgeCard", LargeCard);

        if (slug === Link.city) {
            console.log('render#if#LargeCard');
            return (
                <Container
                    className='col-md-6 col-12'>
                        <Link>
                            <div>
                                <p>name: {name}</p>
                                <img src={source} alt={source}/>
                                {/* <a href={`/hotels/?city=${slug}`}>.</a> */}
                            </div>
                        </Link>
                </Container>
            );
        }
        return(
            <div></div>    
        );

        
    }
}

export default LargeCard;