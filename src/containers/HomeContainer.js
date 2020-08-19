import React from 'react';
// import Api from '../utils/Api';
import Home from '../components/core/Home';
import Gallery from '../components/city/Gallery';
import Config from '../Config';

class HomeContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };
    }
    
    componentDidMount() {
        // Api.getHome()
        const url = `${Config.host}/api/home`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                const cities = json.cities
                this.setState({
                    cities
                })
            });
    //         .then((cities) => {
    //             console.log('cities', cities);
    //             this.setState({
    //                 cities
    //             })
    //         })
    }

    render() {
        return (
            <div>
                <Gallery>
                    <p>{this.props.cities}</p>
                </Gallery>
                
                <Home />
            </div>
        );
    }
}

export default HomeContainer;