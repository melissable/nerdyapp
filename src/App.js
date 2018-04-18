//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import nerd from "./nerd.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    nerd,
    clickedNerd: [],
    score: 0
  };

//when you click on a card ... a nerd is taken out of the array
  imageClick = event => {
    const currentNerd = event.target.alt;
    const NerdAlreadyClicked =
      this.state.clickedNerd.indexOf(currentNerd) > -1;

//if you click on a nerd that has already been picked, the game is reset and cards reshuffled
    if (NerdAlreadyClicked) {
      this.setState({
        nerd: this.state.nerd.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedNerd: [],
        score: 0
      });
        alert("True scientists test a new idea. Want to play again?");

//if you click on an available nerd, your score is increased and cards reshuffled
    } else {
      this.setState(
        {
          nerd: this.state.nerd.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedNerd: this.state.clickedNerd.concat(
            currentNerd
          ),
          score: this.state.score + 1
        },
//if you get all 12 nerd corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Eureka! You are now eligible for an award!");
            this.setState({
              nerd: this.state.nerd.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedNerd: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.nerd.map(nerd => (
            <FriendCard
              imageClick={this.imageClick}
              id={nerd.id}
              key={nerd.id}
              image={nerd.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;