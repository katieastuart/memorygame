import React, { Component } from "react";
import Nav from "./components/nav";
import Title from "./components/title";
import CharacterCards from "./components/characterCards";
import Wrapper from "./components/wrapper";
import characters from "./characters.json"
import './App.css';

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters: characters,
    currentScore: 0,
    topScore: 0,
    clicked: "false",
    message: "Click an item to begin!"
  };

  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var random = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[random]
      array[random] = temp;
    }
    return array
  }

  handleClick = (event) => {
    if (event.target.attributes.clicked.value === "false") {
      console.log (event.target)
      var highScore = this.state.topScore;
      var newScore = this.state.currentScore + 1;
      event.target.attributes.clicked.value = "true"


      if (newScore >= highScore) {
        this.setState({ 
          topScore: newScore,
          message: "You guessed correctly!"
        });
      }

      this.setState({
        currentScore: newScore
      });

      let newChars = this.shuffle(this.state.characters)

      this.setState({
        characters: newChars
      });
    } else {
        // alert("game over");
        this.setState({ 
          currentScore: 0,
          message: "You guessed incorrectly! Try again."
        });

        //reset the array
        this.setState({
          characters: [
            {
              "id": 1,
              "name": "Lorelai Gilmore",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/f/fe/5lorelaigilmore.jpeg/revision/latest/scale-to-width-down/620?cb=20161114184702",
              "clicked": false
            },
            {
              "id": 2,
              "name": "Rory Gilmore",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/d/db/Rorypromo.jpeg/revision/latest/scale-to-width-down/620?cb=20160331222128",
              "clicked": false
            },
            {
              "id": 3,
              "name": "Emily Gilmore",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/f/f2/Kelly-bishop-emily-gilmore.jpg/revision/latest/scale-to-width-down/619?cb=20160903013321",
              "clicked": false
            },
            {
              "id": 4,
              "name": "Richard Gilmore",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/9/90/So%2C_Good_Talk.JPG/revision/latest?cb=20160215204807",
              "clicked": false
            },
            {
              "id": 5,
              "name": "Luke Danes",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/7/79/Lukes1still.jpeg/revision/latest/scale-to-width-down/620?cb=20160317024922",
              "clicked": false
            },
            {
              "id": 6,
              "name": "Logan Huntzberger",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/5/55/507.jpeg/revision/latest?cb=20160530211208",
              "clicked": false
            },
            {
              "id": 7,
              "name": "Jess Mariano",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/d/df/109064916_cebba0445d.jpg/revision/latest/scale-to-width-down/620?cb=20160629160733",
              "clicked": false
            },
            {
              "id": 8,
              "name": "Dean Forester",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/8/88/Promodean.jpeg/revision/latest/scale-to-width-down/620?cb=20160530215725",
              "clicked": false
            },
            {
              "id": 9,
              "name": "Lane Kim",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/7/7a/220lane.jpeg/revision/latest/scale-to-width-down/620?cb=20170111121007",
              "clicked": false
            },
            {
              "id": 10,
              "name": "Paris Gellar",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/7/77/Parisgeller.jpeg/revision/latest/scale-to-width-down/619?cb=20160602012021",
              "clicked": false
            },
            {
              "id": 11,
              "name": "Sookie St. James",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/3/37/3sook.jpeg/revision/latest?cb=20160901143950",
              "clicked": false
            },
            {
              "id": 12,
              "name": "Kirk",
              "image": "https://vignette.wikia.nocookie.net/gilmoregirls/images/a/a5/Kirk1.jpg/revision/latest/scale-to-width-down/620?cb=20160409013155",
              "clicked": false
            }
          ]
        });
      }
    };

    
  

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Nav 
          data={this.state}
        />
        <Title />
        <div className="container">
          <div className="row">
              {this.state.characters.map(character => (
                <CharacterCards
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  clicked={this.state.clicked}
                  handleClick={this.handleClick}
                />
              ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;

