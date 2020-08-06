import React from 'react';

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
            <div>
                <p>{name}</p>
                <p>{slug}</p>
                <img src={source}/>
            </div>
        );
    }
}

export default Card;