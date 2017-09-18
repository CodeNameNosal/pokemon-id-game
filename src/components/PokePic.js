import React from 'react'

class PokePic extends React.Component {
  render(){
    let css = "incorrect-image"
    let display = this.props.back

    if (this.props.solved) {
      css = "correct-image"
      display = this.props.front
    }

    return (
      <img src={display} alt="" id={css}/>
    )
  }
}

export default PokePic;
