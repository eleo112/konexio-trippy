import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';
import LargeCard from '../city/LargeCard';
import Card from '../city/Card';

const Container = styled.div`
    margin-top: 10;
    margin-bottom: 20;
    color: ${Global.color.body};
    font-family: ${Global.font.primary};
`;

class Gallery extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };
    }

    render() {
        const {
            cities
        } = this.state;

        return (
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                </div>
                <div>
                    <LargeCard />
                    <div>
                        <Card>
                            {cities.map((city, index) => {
                                return (
                                    <p key={index}>{city.name}</p>
                                )
                            })}
                        </Card>
                        <Card>
                            {cities.map((city, index) => {
                                return (
                                    <p key={index}>{city.name}</p>
                                )
                            })}
                        </Card>
                        <Card>
                            {cities.map((city, index) => {
                                return (
                                    <p key={index}>{city.name}</p>
                                )
                            })}
                        </Card>
                        <Card>
                            {cities.map((city, index) => {
                                return (
                                    <p key={index}>{city.name}</p>
                                )
                            })}
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Gallery;