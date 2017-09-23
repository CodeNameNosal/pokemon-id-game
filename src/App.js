import React, { Component }  from 'react';
import InputBox from './components/InputBox';
import PokePic from './components/PokePic';
import Replay from './components/Replay';

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
    this.fetchPokemon = this.fetchPokemon.bind(this)
    this.playAgain = this.playAgain.bind(this)
    }


  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon(){
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

  playAgain(){
    this.setState({ solved: false, input:""})
    this.fetchPokemon()
  }

  render() {
    let replay
    if (this.state.solved) {
      replay = <Replay playAgain={this.playAgain}/>
    }

    return(
      <div>
        <h1 className="shake-chunk shake-constant">Pokemon id game</h1>
        <br />
        <PokePic solved={this.state.solved} back={this.state.back} front={this.state.front}/>
        <br />
        <br />
        <p><InputBox
          type="text" passedValue={this.state.input} changeHandler={this.handleInputBox}
        /></p>
        {replay}
      </div>
    )
  }
}

export default App;
