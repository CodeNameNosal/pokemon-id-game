import React, { Component }  from 'react';
import InputBox from './components/InputBox';
import PokePic from './components/PokePic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solved: false,
      name: "",
      input: "",
      back: "",
      front: ""
    }
    this.handleInputBox = this.handleInputBox.bind(this)
    }


  componentDidMount() {
    const starterIds = [1, 4, 7]
    const selectedPokemon = starterIds[Math.floor(Math.random() * starterIds.length)];
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${selectedPokemon}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        name: body.name,
        back: body.sprites.back_default,
        front: body.sprites.front_default
      })
    })
  }

  handleInputBox(e) {
    this.setState({ input: e.target.value})
    if (e.target.value.toLowerCase() === this.state.name) {
      this.setState({ solved: true})
    }
  }

  render() {
    return(
      <div>
        <h1>Pokemon id game</h1>
        <br />
        <PokePic solved={this.state.solved} back={this.state.back} front={this.state.front}/>
        <br />
        <br />
        <p><InputBox
          type="text" passedValue={this.state.input} changeHandler={this.handleInputBox}
        /></p>
      </div>
    )
  }
}

export default App;
