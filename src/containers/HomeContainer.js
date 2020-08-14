import React from 'react';
// import Api from '../utils/Api';
// import Home from '../components/core/Home';
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
                {this.state.cities.map((city, index) => {
                    return (
                        <p key={index}>
                            {city.name}
                        </p>
                    );
                })}
            </div>
            // <div className="container-fluid"
            //     style={{
            //     fontFamily: 'Montserrat'
            // }}>
            //     <div className="row">
            //         <div className={'col-lg-4 col-md-8 col-12'}>
                /* <p>
                Je vérifie que les 2 mots : Voleur et 
                <span style={{
                    fontFamily: 'serif' 
                    }}>Voleur</span> ont une police d'écriture différente
                </p> */
            //         </div>
            //         <div className='col-lg-8 col-md-4 col-12'>
            //             Une autre phrase
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default HomeContainer;