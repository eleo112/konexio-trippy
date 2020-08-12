import React from 'react';
import Card from '../core/Card';
// import Congif from '../Config';

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

        const {
            name,
            slug,
            source
        } = this.props;

        return (
            <div>
                {this.state.cities.map((city) => {
                    return (
                        <div>
                            <img src={'http://localhost:3001' + city.source}/>
                            <p>{city.name}</p>
                        </div>
                    )
                })}
            </div>
        
        );
    }
}

export default Home;