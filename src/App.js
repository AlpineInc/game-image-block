import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from "./components/Grid";
import Thumbnail from "./components/Thumbnail";
import Gameboard from "./components/Gameboard";
import Scorecard from "./components/Scorecard";


class App extends Component {
  state = {
    gameboardImages: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    userSelectedImages: [],
    score: 0,
    maxScore: 0
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    console.log("in componentDidMount");
  }



  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleImageClick = image => {
    console.log(image);
    let maxScore = this.state.maxScore;
    let score = this.state.score;
    let userSelectedImages = this.state.userSelectedImages;

    if (this.state.userSelectedImages.includes(image)) {
      score = 0;
      if (this.state.score > this.state.maxScore) {
        maxScore = this.state.score;
      }
      userSelectedImages = [];
    } else if (score === this.state.gameboardImages.length - 1) {
      maxScore = score + 1;
      score = 0;
      userSelectedImages = [];
    } else {
      score += 1;
      userSelectedImages.push(image);
    }

    this.setState({
      userSelectedImages: userSelectedImages,
      score: score,
      maxScore: maxScore,
      gameboardImages: this.shuffle(this.state.gameboardImages)
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-8 md-8 sm-12">
            <Gameboard>
              {
                this.state.gameboardImages.map(image => (
                  <Thumbnail key={image} onClick={() => this.handleImageClick(image)} src={`./animal${image}.png`} />
                ))
              }
            </Gameboard>
          </Col>
          <Col size="lg-4 md-4 sm-12">
            <Scorecard score={this.state.score} maxScore={this.state.maxScore} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
