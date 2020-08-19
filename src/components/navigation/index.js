import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            isReady: false
        }
    }

    // componentDidMount() {
    //     window.onscroll = this.onScroll.bind(this);
    // }

    render () {
        return (
            <div>
                <h1>prova</h1>
            </div>
        );
    }
}

export default Navigation;