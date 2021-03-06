import React from 'react';
import styled from 'styled-components';
import Link from '../navigation/Link';

const Container = styled.div`

`;

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            source: 'http://via.placeholder.com/300x200',
            slug: '',
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/hotels?city=<city>';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    name: json.name,
                    source: json.source,
                    slug: json.slug
                })
            })

    }

    render() {

        const {
            name,
            slug,
            source
        } = this.state;

        if (slug === Link.city) {
            console.log("render Card");
            return (
                <Container
                    className='col-md-3 col-6'>
                        <Link>
                            <div>
                                <p>name: {name}</p>
                                <img src={source} alt={source}/>
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

export default Card;