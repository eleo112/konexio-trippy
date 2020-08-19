import React from 'react';
import Card from '../../components/city/Card';
import Congif from '../../Config';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    render() {

        const {
            name,
            slug,
            source,
            cities
        } = this.props;

        if (cities.length > 0) {
           return (
            <Card >
                {name} = {cities[0].name}
                {slug} = {cities[0].slug}
                {source} = {cities[0].source}
            </Card>
           );
        }

        return (
            <div>
                {this.state.cities.map((city) => {
                    return (
                        <div>
                            <img src={`${Congif.host}` + city.source} alt={source}/>
                            <p>{name}: {city.name}</p>
                            <p>{slug}</p>
                        </div>
                    )
                })}
            </div>
        
        );
    }
}

export default Home;