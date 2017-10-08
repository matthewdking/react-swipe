import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cards from '../components/cards.jsx';
import NavBar from '../components/nav_bar.jsx';

class Swipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1> Swipe </h1>
        <Cards />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mentors: state.mentors
});

export default connect(mapStateToProps)(Swipe);
