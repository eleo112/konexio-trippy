import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

class Card extends React.Component {

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
        return (
            <Container
                className='col-md-3 col-6'>
                    <Link>
                        <div>
                            <p>name:{name}</p>
                            <img src={source} />
                            {/* <a href="/hotels/?city=<city>"></a> */}
                        </div>
                    </Link>

            </Container>
        );
    }
}

export default Card;