import React from 'react'

const InputBox = (props) => {
  return (
    <input
      onChange={props.changeHandler}
      type="text"
      value={props.passedValue}
      placeholder="Which Pokemon is this?"
    />
  )
}

export default InputBox;
