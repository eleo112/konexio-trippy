import React from 'react';
import Card from '../core/Card';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    render() {

        if (this.props.cities.length > 0) {
            <Card />
        }

        return (
        <p>{name}: {this.props.cities[0].name}</p>
        <p>{slug}: {this.props.cities[0].slug}</p>
        <p>{source}: {this.props.cities[0].source}</p>
        
        );
    }
}

export default Home;