import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
  } from 'react-router-dom';

const Navigation = styled.div`
    background-color: ${Global.color.primary};
    ${props => props.isScrolled && css`
        background-color: red;
    `}
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        this.setState({

        })
    }

    render () {
        return (
            <Router>
                <NavLink />
                <Link to="/hotels">Hotels</Link>
                <Link to="/restaurants">Restaurants</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Navigation></Navigation>
            </Router>
        );
    }
}

export default Nav;