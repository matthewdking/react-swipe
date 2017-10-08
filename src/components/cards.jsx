import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.nextMentor = this.nextMentor.bind(this);
    this.addToAmazing = this.addToAmazing.bind(this);
    this.addToIncredible = this.addToIncredible.bind(this);
  }

  nextMentor() {
    const StateIndex = this.state.activeIndex;
    if (this.state.activeIndex < this.props.mentors.length - 1) {
      this.setState({
        activeIndex: StateIndex + 1
      });
    } else {
      this.setState({
        activeIndex: 0
      });
    }
  }

  addToAmazing() {
    const currentMentor = this.props.mentors[this.state.activeIndex].name;
    if (sessionStorage.amazing) {
      const amazingMentors = JSON.parse(sessionStorage.amazing);
      amazingMentors.push(currentMentor);
      sessionStorage.setItem('amazing', JSON.stringify(amazingMentors));
    } else {
      const amazing = [currentMentor];
      sessionStorage.setItem('amazing', JSON.stringify(amazing));
    }
  }

  addToIncredible() {
    const currentMentor = this.props.mentors[this.state.activeIndex].name;
    if (sessionStorage.incredible) {
      const incredibleMentors = JSON.parse(sessionStorage.incredible);
      incredibleMentors.push(currentMentor);
      sessionStorage.setItem('incredible', JSON.stringify(incredibleMentors));
    } else {
      const incredible = [currentMentor];
      sessionStorage.setItem('incredible', JSON.stringify(incredible));
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.props.mentors[this.state.activeIndex].name }</h1>
        <button onClick={() => {
          this.nextMentor();
          this.addToAmazing();
        }}>Amazing</button>
        <button onClick={() => {
          this.nextMentor();
          this.addToIncredible();
        } }>Incredible</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mentors: state.mentors
});

export default connect(mapStateToProps)(Cards);
